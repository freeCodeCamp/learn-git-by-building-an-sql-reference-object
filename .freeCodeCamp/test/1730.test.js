const assert = require('assert');
const { getFileContents } = require('./utils');

describe('You', () => {
  let rebaseFile;
  before(async () => {
    rebaseFile = await getFileContents('../sql_reference/.git/rebase-merge/done');
  });

  it('should use the "squash" option', async () => {
    assert(/^(s|squash) /gm.test(rebaseFile));
  });
});
