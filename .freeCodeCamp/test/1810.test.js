const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your ".env" file', () => {
  it('should have the correct text added', async () => {
    const envFile = await getFileContents('../sql_reference/.env');

    assert(/^SECRET=MY_SECRET\s*?$/.test(envFile));
  });
});