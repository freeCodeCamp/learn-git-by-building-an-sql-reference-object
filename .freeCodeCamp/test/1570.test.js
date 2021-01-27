const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should choose the commit to interact with', async () => {
    const args1 = (lastCommand[2] === '-i' || lastCommand[2] === '--interactive') && lastCommand[3] === '--root';
    const args2 = lastCommand[2] === '--root' && (lastCommand[3] === '-i' || lastCommand[3] === '--interactive');

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'rebase' && (args1 || args2) && cwd === '/home/strove/project/sql_reference');
  });
});
