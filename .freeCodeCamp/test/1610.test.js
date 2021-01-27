const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should check the log of your repository', async () => {
    const lastCommand2 = lastCommand[2] === '-1' || lastCommand[2] === 'HEAD~2';

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'log' && lastCommand2 && lastCommand[3] === undefined && cwd === '/home/strove/project/sql_reference');
  });
});
