const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your ".gitignore" file', () => {
  it('should have the correct text added', async () => {
    const gitignoreFile = await getFileContents('../sql_reference/.gitignore');

    assert(/^\.env\s*?$/.test(gitignoreFile));
  });
});
