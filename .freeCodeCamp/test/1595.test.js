const assert = require('assert');
const { getCommits } = require('./utils');

describe('You', () => {
  it('should have the correct last commit message', async () => {
    const commits = await getCommits();

    assert(/^feat: add column references\s/.test(commits[0].message));
  });
});
