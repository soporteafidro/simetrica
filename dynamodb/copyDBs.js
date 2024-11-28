// Script para limpiar y copiar todas las tablas de un ambiente a otro.
// npm install aws-sdk, para poder ejectura y tener configurado el cliente de aws
// node copyDBs.js

const AWS = require("aws-sdk");
const dbOri = new AWS.DynamoDB.DocumentClient({
  version: "2012-08-10",
  region: "us-east-1",
});
const dbDest = new AWS.DynamoDB.DocumentClient({
  version: "2012-08-10",
  region: "us-east-2",
});
const envOri = "-jhxhelztabh2bma5h32vldykva-master";
//const envOri = "-f3h4gpl43bcxxchkak5mpyjdhi-sisecdev";
const envDest = "-xlfmadctv5ckje4qqvnbcqz2ma-sisecqa";
const tableNames = [
  "AuditTrace",
  "Sponsor",
  "CRO",
  "Center",
  "Committee",
  "InvimaIteration",
  "StudyCommitteeIteration",
  "Study",
  "StudyCenter",
  "StudyCenterCommittee",
  "Interruption",
  "Addendum",
  "AddendumStudyCenter",
];

function copyDest(data, table) {
  console.log("Total records to copy", table, data.length);
  let i = 0;
  return Promise.all(
    data.map(async (record) => {
      i++;
      await dbDest
        .put({
          Item: record,
          TableName: table + envDest,
        })
        .promise();
      return record;
    })
  );
}

async function scanOrigin(table) {
  console.log("Scanning table in Origin", table);
  const params = {
    TableName: table + envOri,
    ScanIndexForward: true,
  };
  const scanResults = [];
  var items;
  do {
    items = await dbOri.scan(params).promise();
    items.Items.forEach((item) => scanResults.push(item));
    params.ExclusiveStartKey = items.LastEvaluatedKey;
  } while (typeof items.LastEvaluatedKey !== "undefined");

  return copyDest(scanResults, table);
}

async function cleanDestination(data, table) {
  console.log("Total records to delete", table, data.length);
  let i = 0;
  return Promise.all(
    data.map(async (record) => {
      i++;
      await dbDest
        .delete({
          Key: {
            id: record.id,
          },
          TableName: table + envDest,
        })
        .promise();
      return record;
    })
  );
}

async function scanDestination(table) {
  console.log("Scanning table in Destiny", table);
  const params = {
    TableName: table + envDest,
    ScanIndexForward: true,
  };
  const scanResults = [];
  let items;
  do {
    items = await dbDest.scan(params).promise();
    items.Items.forEach((item) => scanResults.push(item));
    params.ExclusiveStartKey = items.LastEvaluatedKey;
  } while (typeof items.LastEvaluatedKey !== "undefined");
  return cleanDestination(scanResults, table);
}

async function run() {
  let promisesCopy = [];
  for (let table of tableNames) {
    console.log("Copying table:", table);
    await scanDestination(table);
    promisesCopy.push(scanOrigin(table));
  }
  return Promise.all(promisesCopy);
}
run().then(process.exit).catch(console.error);
