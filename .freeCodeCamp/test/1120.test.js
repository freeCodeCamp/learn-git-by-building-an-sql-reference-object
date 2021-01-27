const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should enter the suggested command', async () => {
    assert(lastCommand[0] === 'git' && lastCommand[1] === 'stash' && lastCommand[2] === 'drop' && cwd === '/home/strove/project/sql_reference');
  });
});
