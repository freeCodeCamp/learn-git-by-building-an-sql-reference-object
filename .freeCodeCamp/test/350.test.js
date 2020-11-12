const assert = require('assert');
const { getLastCommand, getCommandOutput } = require('./utils');

describe('You', () => {
  let lastCommand, commandOutput;
  before(async () => {
    lastCommand = await getLastCommand();
    commandOutput = await getCommandOutput('git branch');
  });

  it('should use the "git branch" command to create the correct branch', async () => {
    assert(lastCommand[0] === 'git' && lastCommand[1] === 'branch' && /feat\/add-create-table-reference\s/.test(commandOutput));
  });
});
