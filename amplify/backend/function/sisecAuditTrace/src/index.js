/* Amplify Params - DO NOT EDIT
	API_SISEC_AUDITTRACETABLE_ARN
	API_SISEC_AUDITTRACETABLE_NAME
	API_SISEC_GRAPHQLAPIENDPOINTOUTPUT
	API_SISEC_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
var AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();

exports.handler = event => {
    event.Records.forEach((record) => {
        var item = {
            'id': {
                S: record.eventID
            },
            'eventType': {
                S: record.eventName
            },
            'relatedEntityId': {
                S: record.dynamodb.Keys.id.S
            }
        }

        if (record.eventName == 'INSERT') {
            item['data'] = {
                S: JSON.stringify(record.dynamodb.NewImage)
            };
            item['author'] = {
                S: record.dynamodb.NewImage.user.S
            };
            item['entity'] = {
                S: record.dynamodb.NewImage.__typename.S
            };
            item['eventDateTime'] = {
                S: record.dynamodb.NewImage.updatedAt.S
            };
            item['updatedAt'] = {
                S: record.dynamodb.NewImage.updatedAt.S
            };
            item['createdAt'] = {
                S: record.dynamodb.NewImage.updatedAt.S
            };
        } else if (record.eventName == 'REMOVE') {
            item['data'] = {
                S: JSON.stringify(record.dynamodb.OldImage)
            };
            item['author'] = {
                S: record.dynamodb.OldImage.user.S
            };
            item['entity'] = {
                S: record.dynamodb.OldImage.__typename.S
            };
            item['eventDateTime'] = {
                S: (new Date()).toISOString()
            };
            item['updatedAt'] = {
                S: (new Date()).toISOString()
            };
            item['createdAt'] = {
                S: (new Date()).toISOString()
            };
        } else if (record.eventName == 'MODIFY') {
            // items in o2 that are different than o1
            var o2 = record.dynamodb.NewImage;
            var o1 = record.dynamodb.OldImage;
            var rawDiff = objectDifference(o1, o2);
            var diff = {};
            Object.keys(rawDiff).forEach(key => {
                var valN = rawDiff[key].N;
                var valS = rawDiff[key].S;
                var valBOOL = rawDiff[key].BOOL;

                var val = valN || valS || valBOOL;
                if (!val) {
                    //insert of previously missing value
                    diff[key] = rawDiff[key];
                } else if (val.type != 'unchanged') {
                    //change of value
                    diff[key] = rawDiff[key];
                }
            });
            item['data'] = {
                S: JSON.stringify(diff)
            };
            item['author'] = {
                S: record.dynamodb.NewImage.user ? record.dynamodb.NewImage.user.S : ''
            };
            item['entity'] = {
                S: record.dynamodb.NewImage.__typename.S
            };
            item['eventDateTime'] = {
                S: record.dynamodb.NewImage.updatedAt ? record.dynamodb.NewImage.updatedAt.S : ''
            };
            item['updatedAt'] = {
                S: record.dynamodb.NewImage.updatedAt ? record.dynamodb.NewImage.updatedAt.S : ''
            };
            item['createdAt'] = {
                S: record.dynamodb.NewImage.updatedAt ? record.dynamodb.NewImage.updatedAt.S : ''
            };
        }

        var tableName = 'AuditTrace-' + process.env.API_SISEC_GRAPHQLAPIIDOUTPUT + '-' + process.env.ENV;
        var params = {
            TableName: tableName,
            Item: item
        };
        dynamodb.putItem(params, function(err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success", data);
            }
            return Promise.resolve('Successfully processed DynamoDB record');
        })
    });
};


function objectDifference(obj1, obj2) {
    if ((dataType(obj1) !== 'array' && dataType(obj1) !== 'object') || (dataType(obj2) !== 'array' && dataType(obj2) !== 'object')) {
        var type = '';

        if (obj1 === obj2 || (dataType(obj1) === 'date' && dataType(obj2) === 'date' && obj1.getTime() === obj2.getTime()))
            type = 'unchanged';
        else if (dataType(obj1) === 'undefined')
            type = 'created';
        if (dataType(obj2) === 'undefined')
            type = 'deleted';
        else if (type === '') type = 'updated';

        return {
            type: type,
            data: (obj1 === undefined) ? {
                newData: obj2,
                oldData: obj1
            } : {
                newData: obj2,
                oldData: obj1
            }
        };
    }

    if (dataType(obj1) === 'array' && dataType(obj2) === 'array') {
        var diff = [];
        obj1.sort();
        obj2.sort();
        for (var i = 0; i < obj2.length; i++) {
            var type = obj1.indexOf(obj2[i]) === -1 ? 'created' : 'unchanged';
            if (type === 'created' && (dataType(obj2[i]) === 'array' || dataType(obj2[i]) === 'object')) {
                diff.push(
                    objectDifference(obj1[i], obj2[i])
                );
                continue;
            }
            diff.push({
                type: type,
                data: obj2[i]
            });
        }

        for (var i = 0; i < obj1.length; i++) {
            if (obj2.indexOf(obj1[i]) !== -1 || dataType(obj1[i]) === 'array' || dataType(obj1[i]) === 'object')
                continue;
            diff.push({
                type: 'deleted',
                data: obj1[i]
            });
        }
    } else {
        var diff = {};
        var key = Object.keys(obj1);
        for (var i = 0; i < key.length; i++) {
            var value2 = undefined;
            if (dataType(obj2[key[i]]) !== 'undefined')
                value2 = obj2[key[i]];

            diff[key[i]] = objectDifference(obj1[key[i]], value2);
        }

        var key = Object.keys(obj2);
        for (var i = 0; i < key.length; i++) {
            if (dataType(diff[key[i]]) !== 'undefined')
                continue;

            diff[key[i]] = objectDifference(undefined, obj2[key[i]]);
        }
    }

    return diff;
}

function dataType(data) {
    if (data === undefined || data === null) return 'undefined';
    if (data.constructor === String) return 'string';
    if (data.constructor === Array) return 'array';
    if (data.constructor === Object) return 'object';
    if (data.constructor === Number) return 'number';
    if (data.constructor === Boolean) return 'boolean';
    if (data.constructor === Function) return 'function';
    if (data.constructor === Date) return 'date';
    if (data.constructor === RegExp) return 'regex';
    return 'unknown';
}