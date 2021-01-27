/*const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should check the log of your repository', async () => {
    const args1 = lastCommand[2] === '-5' && lastCommand[3] === '--oneline';
    const args2 = lastCommand[2] === '--oneline' && lastCommand[3] === '-5';

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'log' && (args1 || args2) && cwd === '/home/strove/project/sql_reference');
  });
});*/
