'use strict';

const AWS = require('aws-sdk');
const Uuid = require('uuid');

exports.handler = async function(event) {
  const paramStore = new AWS.SSM();
  const parameterName = event.name || 'test-param';

  console.log('Using parameter:', parameterName);

  const result = await paramStore.getParameter({Name: parameterName}).promise();

  console.log('Current Value:', result.Parameter.Value);

  const runValue = Uuid.v4();

  await paramStore.putParameter({Name: parameterName, Value: `${runValue}`, Overwrite: true}).promise();

  console.log('New Value:', runValue);
};
