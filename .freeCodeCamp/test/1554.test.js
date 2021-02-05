const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should "show" the changes of the correct commit', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();
    const lastCommand2 = lastCommand[2] === undefined || lastCommand[2] === 'HEAD';

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'show' && lastCommand2 && /\/project\/sql_reference$/.test(cwd));
  });
});
