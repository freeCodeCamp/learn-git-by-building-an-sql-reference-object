const assert = require('assert');
const { getLastCommand, getCommits } = require('./utils');

describe('You', () => {
  it('should have the correct last commit message', async () => {
    const commits = await getCommits();
    const lastCommand = await getLastCommand();

    assert(/^feat: add \.gitignore and sample\.env\s/.test(commits[0].message));
  });
});
