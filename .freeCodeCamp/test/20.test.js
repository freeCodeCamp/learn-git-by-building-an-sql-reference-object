const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('You', () => {
  it('should use the "mkdir" command to create the correct folder', async () => {
    const projectDirectory = await getDirectoryContents('..');
    const lastCommand = await getLastCommand();

    assert(projectDirectory.indexOf('sql_reference') >= 0 && lastCommand[0] === 'mkdir' && lastCommand[1] === 'sql_reference');
  });
});
