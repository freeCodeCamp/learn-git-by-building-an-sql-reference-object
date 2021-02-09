const assert = require('assert');
const { getCommits } = require('./utils');

describe('You', () => {
  let commits;
  before(async () => {
    commits = await getCommits();
  });

  it('should have the correct last commit message', async () => {
    assert(/^feat: add column references\s/.test(commits[0].message));
  });
});
