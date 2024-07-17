const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your ".gitignore" file', () => {
  it('should have the correct text added', async () => {
    const sampleEnvFile = await getFileContents('../sql_reference/sample.env');

    assert(/^SECRET=\s*?$/.test(sampleEnvFile));
  });
});
