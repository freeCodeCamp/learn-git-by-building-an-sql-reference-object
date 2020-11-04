const assert = require('assert');
const { getNextCommand } = require('./utils');

describe('You', () => {
  it('should enter an interactive rebase', async () => {
    const nextCommand = await getNextCommand();
    const args1 = (nextCommand[2] === '-i' || nextCommand[2] === '--interactive') && nextCommand[3] === 'HEAD~5';
    const args2 = nextCommand[2] === 'HEAD~5' && (nextCommand[3] === '-i' || nextCommand[3] === '--interactive');

    assert(nextCommand[0] === 'git' && nextCommand[1] === 'rebase' && (args1 || args2));
  });
});
