const assert = require('assert');
const { getStagedFiles } = require('./utils');

describe('You', () => {
  it('should add your "README.md" file to staging', async () => {
    const stagedFiles = await getStagedFiles();
    const stagedFileIndex = stagedFiles.findIndex(item => {
      return item.filename === 'README.md' && item.status === 'Added';
    });

    assert(stagedFileIndex >= 0);
  });
});
