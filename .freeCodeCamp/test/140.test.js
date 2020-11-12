const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('You', () => {
  it('should use the "touch" command to create the correct file', async () => {
    const repoDirectoryContents = await getDirectoryContents('../sql_reference');
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'touch' && /sql_reference\.json$/.test(lastCommand[1]) && repoDirectoryContents.indexOf('sql_reference.json' >= 0));
  });
});
