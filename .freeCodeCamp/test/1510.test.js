const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "sql_reference.json" file', () => {
  it('should have the correct properties and values', async () => {
    const jsonFile = await getFileContents('../sql_reference/sql_reference.json');
    const copyOfJsonFile = await getFileContents('./test/sample_files/sql_reference.json');

    assert(jsonFile === copyOfJsonFile);
  });
});
