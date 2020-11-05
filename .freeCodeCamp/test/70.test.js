const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('You', () => {
  let commandOutput;
  before(async () => {
    commandOutput = await getCommandOutput('git status');
  });

  it('should correctly switch to a branch named "main"', async () => {
    assert(/On branch main\s/.test(commandOutput));
  });
});
