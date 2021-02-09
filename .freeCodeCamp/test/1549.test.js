const assert = require('assert');
const { getLastCommand, getCommits } = require('./utils');

describe('You', () => {
  let lastCommand, commits;
  before(async () => {
    commits = await getCommits();
    lastCommand = await getLastCommand();
  });

  it('should have the correct last commit message', async () => {
    assert(commits[0].message === 'Revert "feat: add unique reference"');
  });
});
