const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "sql_reference.json" file', () => {
  let jsonFile, parsedJson;
  before(async () => {
    jsonFile = await getFileContents('../sql_reference/sql_reference.json');
    parsedJson = await JSON.parse(jsonFile);
  });

  it('should have the correct object added', async () => {
    assert(parsedJson.database.create === 'CREATE DATABASE database_name;');
  });
});
