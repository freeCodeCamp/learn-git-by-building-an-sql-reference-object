const assert = require('assert');
const { getLastCommand, getCommandOutput } = require('./utils');

describe('You', () => {
  it('should use the "git branch" command to create the correct branch', async () => {
    const lastCommand = await getLastCommand();
    const commandOutput = await getCommandOutput('git branch');

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'branch' && /feat\/add-create-table-reference\s/.test(commandOutput));
  });
});
