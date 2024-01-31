## Contributing

Please read the guidelines in the [contributing docs](https://contribute.freecodecamp.org/#/how-to-work-on-tutorials-that-use-coderoad) before contributing. Contributions to this project need to follow the correct workflow.

# Change Log

Whenever a new version is created, add the new branch name and the changes here

## [v1.0.0]

- Initial soft release with news article

## [v1.0.1]

- Add in `.vscode/settings.json` setting to use spaces for indentation

## [v1.0.2]

- Move setup commands from `coderoad.yaml` to `setup.sh`
- Add creation of `.bash_history` in setup commands so CodeRoad watchers recognize it when the first command is entered

## [v1.0.3]

- Fix reset commands so it works everywhere

## [v1.0.4]

- Further improve reset command so it doesn't delete and recreate the `sql_reference` folder when resetting

## [v1.0.5]

- Restructure commits to use new style. Instead of loading a new test file, and commenting out the old one on each commit, this loads all the tests in the `INIT` commit and uses mocha settings to only run tests in a specific file. The commits now just change the test file that should run.
- There was an issue with the last commit not loading after using the reset button in a tutorial. I added a final commit at end that seems to have resolved it.
- Add `exit` flag to mocha so the tests can't hang

## [v2.0.0]

- Add Gitpod config
