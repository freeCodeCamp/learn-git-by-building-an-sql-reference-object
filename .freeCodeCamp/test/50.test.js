const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should use the "list" command with the correct flag', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'ls' && lastCommand[1] === '-a' && /\/project\/sql_reference$/.test(cwd));
  });
});
