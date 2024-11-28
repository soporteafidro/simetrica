var AWS = require('aws-sdk')
var fs = require('fs')
var nodemailer = require('nodemailer')

AWS.config.update({
  region: 'us-east-1'
});

var ses = new AWS.SES()

exports.handler = async (event) => {
  console.log(event);
  var mailOptions = {
    from: 'support@integrait.co',
    replyTo: event.arguments.input.from,
    subject: event.arguments.input.subject,
    html: event.arguments.input.html,
    to: event.arguments.input.to,
    icalEvent: event.arguments.input.icalEvent
  }

  var response = {
    result: '',
    error: null
  }
  try {
    if (event.arguments.input.attachment) {
      await writeAttachment(event.arguments.input.attachment, '/tmp/' + event.arguments.input.attachmentFileName)
      let file = await readAttachment('/tmp/' + event.arguments.input.attachmentFileName)
      mailOptions.attachments = [{
        filename: event.attachmentFileName,
        content: file
      }]
    }
    await sendEmail(mailOptions)
    response.result = 'Email Sended!'

    if (event.arguments.input.sendSMS) {
      try {
        await sendSMS(event);
        response.result += ' and SMS Sended!'
      } catch (error) {
        console.log(JSON.stringify(error))
        response.error = error
        response.result = 'Error Sending SMS!'
      }
    }

  } catch (error) {
    console.log(JSON.stringify(error))
    response.error = error
    response.result = 'Error Sending Mail!'
  }
  return response;
}

function writeAttachment(attachment, filename) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(filename, attachment, function (err) {
      if (err) {
        console.log(JSON.stringify(err))
        reject(err)
      }
      console.log('The file' + filename + ' was written!');
      resolve()
    })
  })
}

function readAttachment(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile("/tmp/invite.ics", function (err, data) {
      if (err) {
        console.log(JSON.stringify(err))
        reject(err)
      }
      console.log('The file' + filename + ' was readed!');
      resolve(data);
    })
  })
}

function sendEmail(mailOptions) {
  return new Promise(function (resolve, reject) {
    var transporter = nodemailer.createTransport({
      SES: ses
    })
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(JSON.stringify(err));
        reject(err)
      } else {
        console.log('Email sent successfully');
        resolve(info)
      }
    })
  })

}

function sendSMS(event) {
  var smsParams = {
    Message: event.arguments.input.smsText,
    PhoneNumber: event.arguments.input.smsNumber,
  }
  // Create promise and SNS service object
  return new AWS.SNS({
    apiVersion: '2010-03-31'
  }).publish(smsParams).promise();
}
