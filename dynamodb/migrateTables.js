// Script para agregar migrar las bases de datos de una cuenta a otra usando perfiles aws
// agregar parametro --paste para complentar la migracion.

const AWS = require('aws-sdk');
const { parse } = require('csv-parse');
const profile = process.argv.slice(2)[0]?.includes('paste')
  ? 'defaultnew'
  : 'defaultPROD';
const credentials = new AWS.SharedIniFileCredentials({ profile: profile });
AWS.config.credentials = credentials;
const fs = require('fs');
const db = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-2',
});
const envOri = '-xlfmadctv5ckje4qqvnbcqz2ma-sisecqa';
const envDest = '-5kcyczc5bzbfvda7le6l6t2s7m-sisecnewqa';
const tableNames = [
    "Addendum",
    "AddendumStudyCenter",
    "AuditTrace",
    "CRO",
    "Center",
    "Committee",
    "Interruption",
    "InvimaIteration",
    "Sponsor",
    "Study",
    "StudyCenter",
    "StudyCenterCommittee",
    "StudyCommitteeIteration"
]

function copy(data, table) {
  return Promise.all(
    data.map(async (record) => {
      console.log('Copying record:', record);
      const csv = `${JSON.stringify(record)}##${table}\n`;
      try {
        Promise.resolve(fs.appendFileSync('./records.csv', csv));
      } catch (err) {
        console.error(err);
      }
      return record;
    })
  );
}
async function paste() {
  return new Promise((resolve) => {
    const promises = [];
    fs.createReadStream('./records.csv', 'utf-8')
      .pipe(
        parse({
          delimiter: '##',
          columns: false,
          relax_quotes: true,
          escape: '\\',
        })
      )
      .on('data', async (r) => {
        const record = { value: r?.[0], table: r?.[1] };
        console.log('record', record);
        promises.push(
          db
            .put({
              Item: JSON.parse(record.value),
              TableName: record.table + envDest,
            })
            .promise()
        );
      })
      .on('end', () => {
        console.log('finished');
        resolve(promises);
      });
  });
}
async function scanOrigin(table) {
  const { Items } = await db
    .scan({
      TableName: table + envOri,
      ScanIndexForward: true,
      Limit: 10000,
    })
    .promise();

  return copy(Items, table);
}

async function run() {
  const promises = [];
  console.log(profile);
  if (profile === 'defaultnew') {
    return Promise.all(await paste());
  } else {
    for (const table of tableNames) {
      console.log('Copying table:', table);
      promises.push(scanOrigin(table));
    }
  }
  return Promise.all(promises);
}
run().then().catch(console.error);