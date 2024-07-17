const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should use the "squash" option', async () => {
    const rebaseFile = await getFileContents('../sql_reference/.git/rebase-merge/done');

    assert(/^(s|squash) /gm.test(rebaseFile));
  });
});
