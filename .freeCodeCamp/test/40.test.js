const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('You', () => {
  it('should initialize a repo in your "sql_reference" folder', async () => {
    const repoDirectory = await getDirectoryContents('../sql_reference');
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(repoDirectory.indexOf('.git') >= 0 && lastCommand[0] === 'git' && lastCommand[1] === 'init' && /\/project\/sql_reference$/.test(cwd));
  });
});
