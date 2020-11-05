const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('You', () => {
  let cwd, lastCommand, repoDirectory;
  before(async () => {
    repoDirectory = await getDirectoryContents('../sql_reference');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should initialize a repo in your "sql_reference" folder', async () => {
    assert(repoDirectory.indexOf('.git') >= 0 && lastCommand[0] === 'git' && lastCommand[1] === 'init' && cwd === '/home/strove/project/sql_reference');
  });
});
