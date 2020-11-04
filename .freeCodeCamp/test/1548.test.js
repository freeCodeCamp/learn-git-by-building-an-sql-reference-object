const assert = require('assert');
const { getNextCommand } = require('./utils');

describe('You', () => {
  it('should use the "revert" command correctly', async () => {
    const nextCommand = await getNextCommand();
    const nextCommand2 = nextCommand[2] === 'HEAD' || nextCommand[2] === 'HEAD~' || nextCommand[2] === 'HEAD~1' || nextCommand[2] === 'HEAD^' || nextCommand[2] === 'HEAD^1';

    assert(nextCommand[0] === 'git' && nextCommand[1] === 'revert' && nextCommand2);
  });
});
