const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should use the "cd" command to change to the correct directory', async () => {
    assert(lastCommand[0] === 'cd' && cwd === '/home/strove/project/sql_reference');
  });
});
