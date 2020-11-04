const assert = require('assert');
const { getStagedFiles } = require('./utils');

describe('You', () => {
  it('should add the correct file to staging', async () => {
    const stagedFiles = await getStagedFiles();
    const stagedFileIndex = stagedFiles.findIndex(item => {
      return item.filename === 'sql_reference.json' && item.status === 'Modified';
    });

    assert(stagedFileIndex >= 0);
  });
});
