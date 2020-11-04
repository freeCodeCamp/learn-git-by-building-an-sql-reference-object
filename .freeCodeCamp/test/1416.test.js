const assert = require('assert');
const { getLastCommand, getCommandOutput } = require('./utils');

describe('You', () => {
  it('should delete the correct branch', async () => {
    const lastCommand = await getLastCommand();
    const commandOutput = await getCommandOutput('git branch');

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'branch' && (lastCommand[2] === '-D' || lastCommand[2] === '-d') && !/feat\/add-more-row-references\s/.test(commandOutput));
  });
});
