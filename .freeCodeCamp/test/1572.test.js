const assert = require('assert');
const { getCommits } = require('./utils');

describe('You', () => {
  it('should have the correct fifth to last commit message', async () => {
    const commits = await getCommits();

    assert(commits[4].message === 'feat: add column references');
  });
});
