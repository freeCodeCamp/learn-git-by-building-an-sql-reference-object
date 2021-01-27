const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');
describe('You', () => {
  it('should check the log of your repository', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
    const args1 = lastCommand[2] === '-5' && lastCommand[3] === '--oneline';
    const args2 = lastCommand[2] === '--oneline' && lastCommand[3] === '-5';

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'log' && (args1 || args2) && /\/project\/sql_reference$/.test(cwd));
  });
});