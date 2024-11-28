// Script para modificar el campo areCommentsRequired de la tabla confForm en desarrollo
// npm install aws-sdk, para poder ejectura y tener configurado el cliente de aws
// node updateComments.js

const AWS = require("aws-sdk");
const cie10s = require("../src/assets/CIE10/cie10.json");

const db = new AWS.DynamoDB.DocumentClient({
  version: "2012-08-10",
  region: "us-east-2",
  //region: "us-east-1",
});

//const TableName = "Study-f3h4gpl43bcxxchkak5mpyjdhi-sisecdev";
const TableName = "Study-xlfmadctv5ckje4qqvnbcqz2ma-sisecqa";


function transform(data) {
  return Promise.all(
    data.map(async (record) => {
      const newItem = record;
      const newCIE10 = getCIE103D(record.CIE10);
      newItem.CIE10 = newCIE10;
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

function getCIE103D(cie104d) {
  let cie103d = "NO CIE10 FOUND";
  let newCie10 = cie10s.find((x) => x.code === cie104d.substring(0, 3));
  if (newCie10) {
    cie103d = newCie10.code + " - " + newCie10.description;
  }
  console.log("cie103d", cie103d);
  return cie103d;
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
  } while (typeof items.LastEvaluatedKey !== "undefined");

  return transform(scanResults);
}

run().then(process.exit).catch(console.error);
