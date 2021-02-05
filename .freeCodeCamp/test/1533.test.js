const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should check the log of your repository', async () => {
    assert(lastCommand[0] === 'git' && lastCommand[1] === 'reset' && lastCommand[2] === 'HEAD~1' && cwd === '/home/strove/project/sql_reference');
  });
});
