const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'stash' && lastCommand[2] === 'show' && lastCommand[3] === 'stash@{1}' && /\/project\/sql_reference$/.test(cwd));
  });
});
