const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('You', () => {
  it('should use the "touch" command to create the correct file', async () => {
    const repoDirectoryContents = await getDirectoryContents('../sql_reference');
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'touch' && /\.env$/.test(lastCommand[1]) && repoDirectoryContents.indexOf('.env' >= 0));
  });
});
