/*const assert = require('assert');
const { getLastCommand, getCommandOutput } = require('./utils');

describe('You', () => {
  let lastCommand, commandOutput;
  before(async () => {
    lastCommand = await getLastCommand();
    commandOutput = await getCommandOutput('git status');
  });

  it('should use "git checkout" to switch to the correct branch', async () => {
    assert(lastCommand[0] === 'git' && lastCommand[1] === 'checkout' && (lastCommand[2] === '-b' || lastCommand[2] === '-B') && /On branch feat\/add-drop-table-reference\s/.test(commandOutput));
  });
});*/
