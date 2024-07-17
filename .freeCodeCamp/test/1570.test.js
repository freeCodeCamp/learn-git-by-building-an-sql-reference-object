const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  it('should use the "reword" option', async () => {
    const rebaseFile = await getFileContents('../sql_reference/.git/rebase-merge/done');

    assert(/^(r|reword) /gm.test(rebaseFile));
  });
});
