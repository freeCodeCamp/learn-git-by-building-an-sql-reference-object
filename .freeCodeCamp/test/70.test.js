const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('You', () => {
  it('should correctly switch to a branch named "main"', async () => {
    const commandOutput = await getCommandOutput('git status');

    assert(/On branch main\s/.test(commandOutput));
  });
});
