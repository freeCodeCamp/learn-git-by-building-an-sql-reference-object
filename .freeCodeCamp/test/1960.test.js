const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should choose the commits to interact with', async () => {
    assert(false);
  });
});
