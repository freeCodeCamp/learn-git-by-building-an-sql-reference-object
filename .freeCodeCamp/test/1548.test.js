const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should use the "revert" command correctly', async () => {
    assert(false && lastCommand[0] === 'git' && lastCommand[1] === 'revert' && cwd === '/home/strove/project/sql_reference');
  });
});
