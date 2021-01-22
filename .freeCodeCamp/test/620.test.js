const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should check the diff of your changes', async () => {
    assert(lastCommand[0] === 'git' && lastCommand[1] === 'diff' && cwd === '/home/strove/project/sql_reference');
  });
});
