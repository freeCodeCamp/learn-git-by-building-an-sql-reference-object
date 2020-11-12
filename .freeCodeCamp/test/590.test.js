const assert = require('assert');
const { getLastCommand, getCommandOutput } = require('./utils');

describe('You', () => {
  let lastCommand, commandOutput;
  before(async () => {
    lastCommand = await getLastCommand();
    commandOutput = await getCommandOutput('git branch');
  });

  it('should use "git checkout" to switch to the correct branch', async () => {
    assert(lastCommand[0] === 'git' && lastCommand[1] === 'branch' && (lastCommand[2] === '-D' || lastCommand[2] === '-d') && !/feat\/add-drop-table-reference/.test(commandOutput));
  });
});
