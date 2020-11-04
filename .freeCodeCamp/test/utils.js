const fs = require('fs');
const util = require('util');
const path = require('path');
const parseCommand = require('shell-quote').parse;
const { gitToJs } = require('git-parse');
const sgf = require('staged-git-files');
const execute = util.promisify(require('child_process').exec);

const pathToRepo = '../sql_reference';
sgf.cwd = pathToRepo;
sgf.includeContent = true;

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

const getLastCommand = async (dir = process.cwd()) => {
  const pathToBashLogs = path.join(dir, '../../', '.bash_history');
  const bashLogs = await readFile(pathToBashLogs, 'utf8');

  if (!bashLogs) {
    throw new Error(`Could not find ${pathToBashLogs}`);
  }

  const logs = bashLogs.split('\n');
  const lastLog = logs[logs.length - 2];
  const parsedCommand = parseCommand(lastLog);

  return parsedCommand;
};

const getNextCommand = async (howManyBack = 2, dir = process.cwd()) => {
  const pathToNextCommandLogs = path.join(dir, './test', '.next_command');
  const nextCommandLogs = await readFile(pathToNextCommandLogs, 'utf8');

  if (!nextCommandLogs) {
    throw new Error(`Could not find ${pathToNextCommandLogs}`);
  }

  const logs = nextCommandLogs.split('\n');
  const nextCommand = logs[logs.length - howManyBack];
  const parsedCommand = parseCommand(nextCommand);

  return parsedCommand;
};

const getCwd = async (dir = process.cwd()) => {
  const pathToCwdLogs = path.join(dir, './test', '.cwd');
  const cwdLogs = await readFile(pathToCwdLogs, 'utf8');

  if (!cwdLogs) {
    throw new Error(`Could not find ${pathToCwdLogs}`);
  }

  const logs = cwdLogs.split('\n');
  const lastLog = logs[logs.length - 2];

  return lastLog;
};

const getPreviousCwd = async (dir = process.cwd()) => {
  const pathToCwdLogs = path.join(dir, './test', '.cwd');
  const cwdLogs = await readFile(pathToCwdLogs, 'utf8');

  if (!cwdLogs) {
    throw new Error(`Could not find ${pathToCwdLogs}`);
  }

  const logs = cwdLogs.split('\n');
  const previousLog = logs[logs.length - 3];

  return previousLog;
};

const getDirectoryContents = async (dir = process.cwd()) => {
  const directoryContents = await readdir(dir);

  if (!directoryContents) {
    throw new Error(`Could not find folder ${dir}`);
  }

  return directoryContents;
};

const getFileContents = async (file = process.cwd()) => {
  const fileContents = await readFile(file);

  if (!fileContents) {
    throw new Error(`Could not read file ${file}`);
  }

  return fileContents.toString();
};

const getStagedFiles = async () => {
  const stagedFiles = await sgf();

  if (!stagedFiles) {
    throw new Error('Could not get staged files');
  }

  return stagedFiles;
};

const getCommits = async () => {
  const commits = await gitToJs(pathToRepo);

  if (!commits) {
    throw new Error('Could not get commits in repo');
  }

  return commits;
};

const getCommandOutput = async function(command) {
  const { stdout } = await execute(command, { cwd: '../sql_reference', shell: '/bin/bash' });
  return stdout;
}

exports.getLastCommand = getLastCommand;
exports.getNextCommand = getNextCommand;
exports.getCwd = getCwd;
exports.getPreviousCwd = getPreviousCwd;
exports.getDirectoryContents = getDirectoryContents;
exports.getFileContents = getFileContents;
exports.getStagedFiles = getStagedFiles;
exports.getCommits = getCommits;
exports.getCommandOutput = getCommandOutput;
