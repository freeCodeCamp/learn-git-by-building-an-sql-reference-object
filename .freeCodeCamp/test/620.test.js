const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should check the diff of your changes', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'diff' && /\/project\/sql_reference$/.test(cwd));
  });
});
