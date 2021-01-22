const assert = require('assert');
const { getCommits } = require('./utils');

describe('You', () => {
  it('should commit the staged files with the correct message', async () => {
    const commits = await getCommits();

    assert(commits[0].message === 'feat: add insert row reference');
  });
});
