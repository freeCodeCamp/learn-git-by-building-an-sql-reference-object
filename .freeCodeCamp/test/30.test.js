const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should use the "cd" command to change to the correct directory', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'cd' && /\/project\/sql_reference$/.test(cwd));
  });
});
