const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should view the branches in your repository', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
    const lC2 = lastCommand[2] === '-a' || lastCommand[2] === '--all' || lastCommand[2] === undefined;

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'branch' && lC2 && /\/project\/sql_reference$/.test(cwd));
  });
});
