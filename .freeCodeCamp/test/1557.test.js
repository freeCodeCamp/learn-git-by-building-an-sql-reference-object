const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should "show" the changes of the correct commit', async () => {
    lastCommand2 = lastCommand[2] === 'HEAD~' || lastCommand[2] === 'HEAD^' || lastCommand[2] === 'HEAD~1' || lastCommand[2] === 'HEAD^1';

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'show' && lastCommand2 && cwd === '/home/strove/project/sql_reference');
  });
});
