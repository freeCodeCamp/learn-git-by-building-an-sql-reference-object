const assert = require('assert');
const { getCommits } = require('./utils');

describe('You', () => {
  let commits;
  before(async () => {
    commits = await getCommits();
  });

  it('should have the correct fifth to last commit message', async () => {
    assert(commits[4].message === 'feat: add column references');
  });
});
