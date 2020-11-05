/*const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('You', () => {
  let cwd, lastCommand, projectDirectory;
  before(async () => {
    projectDirectory = await getDirectoryContents('..');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should use the "mkdir" command to create the correct folder', async () => {
    assert(projectDirectory.indexOf('sql_reference') >= 0 && lastCommand[0] === 'mkdir' && lastCommand[1] === 'sql_reference' && cwd === '/home/strove/project');
  });
});*/
