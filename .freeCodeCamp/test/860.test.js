const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "sql_reference.json" file', () => {
  let jsonFile, parsedJson;
  before(async () => {
    jsonFile = await getFileContents('../sql_reference/sql_reference.json');
    parsedJson = await JSON.parse(jsonFile);
  });

  it('should have the correct properties and values added', async () => {
    assert(parsedJson.row.insert === 'INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2);');
  });
});
