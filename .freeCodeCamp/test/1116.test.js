const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should enter the suggested command', async () => {
		const args1 = (lastCommand[3] === '-p' || lastCommand[3] === '--patch') && lastCommand[4] === 'stash@{1}';
		const args2 = lastCommand[3] === 'stash@{1}' && (lastCommand[4] === '-p' || lastCommand[4] === '--patch');

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'stash' && lastCommand[2] === 'show' && (args1 || args2) && cwd === '/home/strove/project/sql_reference');
  });
});
