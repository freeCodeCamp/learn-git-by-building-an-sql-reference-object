const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should view the branches in your repository', async () => {
    const lC2 = lastCommand[2] === '-a' || lastCommand[2] === '--all' || lastCommand[2] === undefined;

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'branch' && lC2 && cwd === '/home/strove/project/sql_reference');
  });
});
