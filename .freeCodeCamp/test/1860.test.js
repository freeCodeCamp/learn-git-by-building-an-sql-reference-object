const assert = require('assert');
const { getStagedFiles } = require('./utils');

describe('You', () => {
  let stagedFiles;
  before(async () => {
    stagedFiles = await getStagedFiles();
  });

  it('should add the correct file to staging', async () => {
    const stagedFileIndex = stagedFiles.findIndex(item => {
      return item.filename === '.gitignore' && item.status === 'Added';
    });

    assert(stagedFileIndex >= 0);
  });
});
