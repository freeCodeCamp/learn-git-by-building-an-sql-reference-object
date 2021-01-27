const assert = require('assert');
const { getLastCommand, getCommits } = require('./utils');

describe('You', () => {
  let lastCommand, commits;
  before(async () => {
    commits = await getCommits();
    lastCommand = await getLastCommand();
  });

  it('should commit the staged files with the correct message', async () => {
    assert(commits[0].message === 'feat: add delete row reference');
  });
});
