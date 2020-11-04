const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "README.md" file', () => {
  it('should have the correct text added', async () => {
    const readmeFile = await getFileContents('../sql_reference/README.md');

    assert(/SQL Reference/.test(readmeFile));
  });
});