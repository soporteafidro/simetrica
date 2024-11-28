/* Amplify Params - DO NOT EDIT
	API_SISEC_CENTERTABLE_ARN
	API_SISEC_CENTERTABLE_NAME
	API_SISEC_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB.DocumentClient();


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 exports.handler = async (event, context, callback) => {
    try {
      
      const params = {
        TableName: process.env.API_SISEC_CENTERTABLE_NAME
      };
  
      //Llama la funcion que obtendra todos los elementos de la tabla del cie10
      let items = await getCenters(params);
      //Solo se mantiene el codigo y la descripcion de los elementos de la tabla
      items = items.map(x => ({nombre: x.nombre }));
  
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,GET"
        },
        body: JSON.stringify(items),
      };
    } catch (error) {
      console.log(error);
      callback(error, event);
    }
  };
  
  
  //Obtiene todos los items
  async function getCenters(params) {
    const _getAllData = async (params, startKey) => {
      if (startKey) {
        params.ExclusiveStartKey = startKey
      }
      return dynamodb.scan(params).promise()
    }
    let lastEvaluatedKey = null
    let rows = []
    //Si no trajo todos los datos, verifica si hay un elementos siguiente y lo pide
    do {
      const result = await _getAllData(params, lastEvaluatedKey)
      rows = rows.concat(result.Items)
      lastEvaluatedKey = result.LastEvaluatedKey
    } while (lastEvaluatedKey)
    return rows
  }