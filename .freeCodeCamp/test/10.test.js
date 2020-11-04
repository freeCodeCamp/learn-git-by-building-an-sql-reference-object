const assert = require('assert');
const { getLastCommand } = require('./utils');
describe('You', () => {
  let lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
  });
  it('should echo the correct text in the terminal', async () => {
    assert(lastCommand[0] === 'echo' && lastCommand[1] === 'hello' && lastCommand[2] === 'git');
  });
});