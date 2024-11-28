/* Amplify Params - DO NOT EDIT
    API_SISEC_CENTERTABLE_ARN
    API_SISEC_CENTERTABLE_NAME
    API_SISEC_GRAPHQLAPIIDOUTPUT
    API_SISEC_STUDYCENTERTABLE_ARN
    API_SISEC_STUDYCENTERTABLE_NAME
    API_SISEC_STUDYTABLE_ARN
    API_SISEC_STUDYTABLE_NAME
    ENV
    REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context, callback) => {
    try {

        const { cie10, name, center, city } = JSON.parse(event.body);
        console.log('body -->', event.body);

        let studies = await getStudies(cie10, name);

        //Filtra los estudios que no cumplan las siguientes condiciones
        studies = studies.filter((study) => {
            return study.estado === 'PROPUESTO' || study.estado === 'ENCURSO' || study.estado === 'FINALIZADO';
        });


        //Obtiene el centro que esta relacionado al estudio
        studies = studies = await Promise.all(
            studies.map(async (study) => {
                const centers = await getStudyCenter(study.id);
                console.log('studyCenters -->', centers);
                return ({
                    ...study,
                    centros: await getCenters(centers)
                });
            })
        );

        //Elimina los estudios que no tengan un centro asociado
        studies = studies.filter(study => study.centros.length !== 0);

        //Cada centro será un objeto con la información de su respectivo estudio
        let result = [];

        studies.forEach(study => {
            study.centros.forEach((_center) => {
                delete study.centros;
                result.push({
                    ...study,
                    ..._center
                });
            });
        });

        console.log(result, 'studies')


        //Si el filtro del centro esta activo, filtrará por centro
        if (center.length !== 0) {
            result = findStudies(result, center);
        }

        if (city.length !== 0) {
            result = findStudiesByCity(result, city);
        }

        console.log('resultado -->', result);


        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST,GET"
            },
            body: JSON.stringify(result),
        };
    } catch (error) {
        console.log(error);
        callback(error, event);
    }
};

//Obtienes todos los estudios
async function getStudies(CIE10, title) {
    let params = {
        TableName: process.env.API_SISEC_STUDYTABLE_NAME,
        FilterExpression: "(contains(CIE10, :CIE10)) and (contains(titulo, :titulo))",
        ExpressionAttributeValues: {
            ":CIE10": CIE10,
            ":titulo": title

        },
        ProjectionExpression: "id, CIE10, titulo, estado, tipoPoblacion"
    };

    const scanResults = [];
    let items;
    do {
        items = await dynamodb.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey = items.LastEvaluateKey;
    } while (typeof items.LastEvaluateKey != 'undefined');

    return scanResults;
}

//Obtiene los enlaces entros los centros y los estudios
async function getStudyCenter(id) {
    let params = {
        TableName: process.env.API_SISEC_STUDYCENTERTABLE_NAME,
        FilterExpression: "studyID = :studyID",
        ExpressionAttributeValues: {
            ":studyID": id,

        },
        ProjectionExpression: "centerID, estado"
    };

    let scanResults = [];
    let items;
    do {
        items = await dynamodb.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey = items.LastEvaluateKey;
    } while (typeof items.LastEvaluateKey != 'undefined');

    scanResults = scanResults.filter((center) => center.estado !== 'DELETED').map((center) => {
        delete center.estado;
        return center;
    });

    return scanResults;
}

//obtiene un centro que coincida con el id
async function getCenter(id) {
    const result = await dynamodb.get({
        TableName: process.env.API_SISEC_CENTERTABLE_NAME,
        Key: {
            id
        }
    }).promise();

    return result.Item;
}

//Obtiene la información de cada centro
async function getCenters(centers) {
    let centerInfo = [];

    for (const center of centers) {
        const data = await getCenter(center.centerID);
        if (data.estado !== 'DELETED' && data.estado !== 'INACTIVE') {
            centerInfo.push({
                nombre: data.nombre,
                ciudad: data.municipio,
                contacto: data.informacionContacto
            });
        }
    }
    return centerInfo;
}

//Filta los estudios segun su centro
function findStudies(studies, center) {
    return studies.filter(study => {
        return (removeAccents(study.nombre).toLowerCase().includes(removeAccents(center).toLowerCase()));
    });
}

//Filta los estudios segun su centro
function findStudiesByCity(studies, city) {
    return studies.filter(study => {
        return study.ciudad === city;
    });
}

function removeAccents(str) {
    if (!str) return '';
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}