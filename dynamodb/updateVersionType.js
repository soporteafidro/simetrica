// Script para actulizar la vistas de los sujeto anteriores
// npm install aws-sdk, para poder ejectura y tener configurado el cliente de aws
// node updatePhaseSubject.js

const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({
  version: '2012-08-10',
  region: 'us-east-2',
});

//---------Master-------------
/* CRO-jhxhelztabh2bma5h32vldykva-master */
/* Sponsor-jhxhelztabh2bma5h32vldykva-master */
/* Center-jhxhelztabh2bma5h32vldykva-master */

//--------QA------------------
/* CRO-xlfmadctv5ckje4qqvnbcqz2ma-sisecqa */
/* Sponsor-xlfmadctv5ckje4qqvnbcqz2ma-sisecqa */
/* Center-xlfmadctv5ckje4qqvnbcqz2ma-sisecqa */
const TableName = 'Sponsor-xlfmadctv5ckje4qqvnbcqz2ma-sisecqa';

function transform(data) {
    return Promise.all(
      data.map(async (record) => {
        const newItem = record;
        newItem.version = parseInt(newItem.version);
        await db
          .put({
            Item: newItem,
            TableName,
          })
          .promise();
        return newItem;
      })
    );
  }

async function run() {
  const params = {
    TableName: TableName,
  };

  const scanResults = [];
  var items;
  do {
    items = await db.scan(params).promise();
    items.Items.forEach((item) => scanResults.push(item));
    params.ExclusiveStartKey = items.LastEvaluatedKey;
  } while (typeof items.LastEvaluatedKey !== 'undefined');


  console.log(scanResults);

  return transform(scanResults);
}

run().then(process.exit).catch(console.error);
