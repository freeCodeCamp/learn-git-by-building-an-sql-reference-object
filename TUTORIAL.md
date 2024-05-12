# Learn Git by Building an SQL Reference Object

> Welcome to the git lessons!

## 10. Start Terminal

### 10.1

The first thing you need to do is start the terminal. Open a new one by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello git` into the terminal and press enter.

#### HINTS

- Follow the directions closely
- If the tests don't pass, trash all the terminals with the trash can icon at the top right of the terminal. Then, redo those instructions

## 20. Make Directory

### 20.1

You should be in the `project` folder in the terminal you opened. Use the terminal to make a new directory named `sql_reference` in the `project` folder. As a reminder, you can use the `mkdir` command to make a new folder.

#### HINTS

- Enter `mkdir sql_reference` in the terminal from the `project` folder
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- Don't try to create the folder with another method

## 30. Change Directory

### 30.1

Use the "change directory" command in the terminal to change to your new folder.

#### HINTS

- Enter `cd sql_reference` into the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there

## 40. Initialize a git Repository

### 40.1

Git is a version control system to keep track of your code. This folder will be your git repository. Turn it into one by typing `git init` in the terminal from this folder.

#### HINTS

- Enter `git init` into the terminal while in the `sql_reference` folder
- Make sure you are in the `sql_reference` folder first
- Enter `cd ~/project/sql_reference` to get to the folder if you aren't there

## 50. View .git Folder

### 50.1

Use the list command with the `-a` flag to list the hidden folders and files.

#### HINTS

- The list command is `ls`
- Type `ls -a` into the terminal and press enter
- Make sure you are in the `sql_reference` folder first
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 60. git status

### 60.1

The `git init` command created that `.git` folder for you. It's what keeps track of all the things in your repository. Use `git status` to see the status of where you are. This command will be your best friend.

#### HINTS

- Type `git status` into the terminal and press enter
- Make sure you are in the `sql_reference` folder first
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 70. Checkout main Branch

### 70.1

A git repository has branches to help keep track of things you are doing with your code. It's common to have a `main` branch which might be for your production code, and other branches for adding new features or fixing bugs. You can create and go to a new branch with `git checkout -b new_branch`. The `-b` stands for "branch". Use that command to switch to a new branch named `main`.

#### HINTS

- Capitalization matters
- Type `git checkout -b main` into the terminal
- Make sure you are in your `sql-reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 80. git status

### 80.1

Check your status again with `git status`.

#### HINTS

- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 90. touch README.md

### 90.1

Now you are on the `main` branch. Use the `touch` command to create `README.md` inside your repository. This is a file you will see in many repos to describe what the repo is for.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch README.md` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 100. Add Readme Text

### 100.1

Add the text `SQL Reference` at the top of your new file to let people know what your repo is for.

#### HINTS

- Add the suggested text in your `README.md` file

## 110. git status

### 110.1

Check the status of your repo again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 120. git add README.md

### 120.1

The file you created has not been added to git yet so it is showing that it is untracked. There's two steps to make git keep track of it for you. First you need to add it to the staging area like this: `git add file_name`. Add your `README.md` file to the staging area.

#### HINTS

- Replace `file_name` in the example with your `README.md` file
- Type `git add README.md` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 130. git status

### 130.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 140. touch sql_reference.json

### 140.1

Now your file is in staging and will be added with the next commit. You aren't quite ready to commit this yet though. Use `touch` again to create `sql_reference.json` in your repo.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch sql_reference.json` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 150. git status

### 150.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 160. git add Initial commit

### 160.1

You now have one file in staging and one that is untracked. Add the new file you created to the staging area.

#### HINTS

- Here's the example again: `git add file_name`
- You added the last one with `git add README.md`
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 170. git status

### 170.1

Check your status one more time please :grin:

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 180. git commit Initial commit

### 180.1

Now you have two files in staging. To commit them, you can use `git commit -m "Initial commit"`. The `-m` stands for "message". Often times, the first commit of a repo will have the message "Initial commit". Commit your two files with the message `Initial commit`.

#### HINTS

- Type `git commit -m "Initial commit"` in the terminal and press enter
- Enter `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 190. git status

### 190.1

When you make a commit, whatever is in the staging area will be added to your git history. You can see some info in the terminal output about the commit. Check your status again to see what's there.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 200. git log

### 200.1

Your "working tree" is clean, the files were committed and there's no other new changes that git recognizes. You can see your commit history with `git log`. Check your commit history.

#### HINTS

- Type `git log` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 210. Add CREATE DATABASE Command

### 210.1

You can see the commit you made. It shows the message you gave with the commit, along with your username, email, the date, and a commit hash. The hash is that long string of characters. Open up your `.json` file and create an object with a reference for how to create a database that looks like this:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;"
  }
}
```

Make sure there's one empty line at the bottom of the file and no extra spaces after the value or any of the curly brackets.

#### HINTS

- Add the suggested object to your `sql_reference.json` file
- Double check for those extra spaces and the empty line

## 220. git status

### 220.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 230. git diff

### 230.1

Git recognizes new unstaged changes to your file. Notice that it says that file is modified instead of untracked because the file has been previously committed. You can see the changes you made with `git diff`. Take a look at the new changes.

#### HINTS

- Type `git diff` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 240. git add sql_reference.json

### 240.1

The lines with `+` in front means that those lines were added. Add your new changes to staging with the `git add` command again. Make sure to put the filename you want to add at the end of the command.

#### HINTS

- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 250. git status

### 250.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 260. git commit feat: add create database reference

### 260.1

Your new changes are staged and ready to be committed. Commit them with the message `feat: add create database reference`. As a reminder, here what the command to commit looks like: `git commit -m "message"`.

#### HINTS

- Type `git commit -m "feat: add create database reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 270. git log

### 270.1

Commit messages often start with `fix:` or `feat:`, among others, to help people understand what your commit was for. Check your `git log` again to see the new commit added.

#### HINTS

- Type `git log` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 280. Add DROP DATABASE command

### 280.1

Now there's two commits in your history, the newest one is at the top :smile: In your JSON file, add a `drop` key to your `database` object. Give it a value for how to drop a database similar to the `create` value. The syntax is in the hints. Again, make sure there's an empty line at the bottom of the file and no extra spaces after any values or curly brackets.

#### HINTS

- The value should be `"DROP DATABASE database_name;"`
- Don't forget the comma at the end of the previous line to make it a valid json object.
- Your database object should have these values:
```json
{
  "create": "CREATE DATABASE database_name;",
  "drop": "DROP DATABASE database_name;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 290. git status

### 290.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 300. git diff

### 300.1

Changes not staged. Check the `diff` quick.

#### HINTS

- Use the "git diff" command in your repo
- Type `git diff` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 310. git add DROP DATABASE command

### 310.1

It should show one line removed and two lines added. Add your changes to the staging area.

#### HINTS

- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 320. git commit feat: add drop database reference

### 320.1

Commit your staged changes with the message, `feat: add drop database reference`

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add drop database reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 330. git log

### 330.1

I think you're catching on :smile: Check the `log` again.

#### HINTS

- Type `git log` into the terminal and press enter
- Press `enter` in the terminal to go through the whole log
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 340. git branch

### 340.1

Now there's three commits :smile: You have been making changes to your `main` branch. You actually want to try and avoid that. Type `git branch` to see the current branches in your repo.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 350. git branch feat/add-create-table-reference

### 350.1

You only have the `main` branch still. You can create a branch with `git branch branch_name`. Branches often start with `fix/` or `feat/`, among others, like commit messages, but they use a forward slash and can't contain spaces. Create a new branch named `feat/add-create-table-reference`.

#### HINTS

- Type `git branch feat/add-create-table-reference` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 360. git branch

### 360.1

Your new branch is a clone of the `main` branch since that's the branch you were on when you created it. It will have the same code and commit history as `main` did at the time of the branch creation. View your branches again with `git branch`.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 370. git checkout feat/add-create-table-reference

### 370.1

You can see your new branch, but you are still on the `main` branch, as denoted with the `*`. To switch to a branch use: `git checkout branch_name`. Switch to your new branch.

#### HINTS

- Type `git checkout feat/add-create-table-reference` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 380. git branch

### 380.1

It says you switched to your new branch. Type `git branch` so I can make sure the `*` switched.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 390. Add CREATE TABLE Command

### 390.1

Like I said, you often don't want to make commits directly to the main branch of a repo. This branch will be for some new changes. What you will do is make the changes and commits here, then merge them into the `main` branch when they are ready. Add a reference for creating an SQL table to your json file along side your `database` property. Make it look like this:

```json
"table": {
  "create": "CREATE TABLE table_name;"
}
```

#### HINTS

- Make sure to add commas to keep it a valid json object
- The `table` key should be on the same level as the `database` key
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 400. git status

### 400.1

Show me the status again. You might as well get used to it :smiley_cat:

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 405. git diff

### 405.1

Changes not staged. Check the `diff` quick so you can make sure your changes look good.

#### HINTS

- Use the "git diff" command in your repo
- Type `git diff` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 410. git add CREATE TABLE reference

### 410.1

You made new changes so the file shows up as not staged. Add the file to staging so you can commit the changes.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 420. git commit feat: add create table reference

### 420.1

The changes are now in staging. Commit your staged changes with the message `feat: add create table reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add create table reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 430. git log

### 430.1

Check your `git log` again.

#### HINTS

- Type `git log` into the terminal and press enter
- Press `enter` in the terminal to go through the whole log
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 435. git log oneline

### 435.1

Now you have four commits, they are getting a little hard to see. Check the log again, but this time use the `--oneline` flag to condense the output so it's more readable.

#### HINTS

- Type `git log --oneline` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 440. git checkout main

### 440.1

That's better. Use `git checkout` to switch back to the `main` branch.

#### HINTS

- Use `git checkout branch_name` to switch to a branch
- Enter `git checkout main` into the terminal and press enter

## 450. git log

### 450.1

You may have noticed that the code you added disappeared from the JSON file. Your changes were added on the `feat/add-create-table-reference` branch so they don't exist on this branch. Check the log of the main branch, use the `--oneline` flag again.

#### HINTS

- Type `git log --oneline` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 460. git branch

### 460.1

You can see three commits on this branch and four on the feature branch you were just on. The commit and code you added on the feature branch only exist over there for now. View the branches you have to remind me the name of your other branch.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 470. git merge feat/add-create-table-reference

### 470.1

You created the `feat/add-create-table-reference` branch, made a commit, and now it's ready to be added to the `main` branch. You can use `git merge branch_name` to bring changes from a branch into the branch you are currently on. Merge the changes from your feature branch into the `main` branch.

#### HINTS

- Type `git merge feat/add-create-table-reference` into the terminal and press enter
- Make sure you enter the command while on the `main` branch

## 480. git log oneline

### 480.1

The commits and code from your feature branch were added to this branch. There's a message with some info about the merge. Check the log with the `--oneline` flag again.

#### HINTS

- Use the `git log` command with the correct flag
- Type `git log --oneline` into the terminal and press enter

## 490. git branch -d feat/add-create-table-reference

### 490.1

The `feat: add create table reference` commit you made on your feature branch was added to this branch with the merge. You can delete a branch with `git branch -d branch_name`. `-d` stands for "delete". Since your changes were added, you can safely delete your feature branch. Do that now.

#### HINTS

- The branch name is `feat/add-create-table-reference`
- Type `git branch -d feat/add-create-table-reference` into the terminal and press enter

## 500. git branch

### 500.1

It said it was deleted, but view your branches again for me to verify that it's gone.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 510. git checkout -b feat/add-drop-table-reference

### 510.1

You're just left with the `main` branch... Want to try it again? Last time you created a branch and then switched to it. You can do both at the same time with `git checkout -b branch_name`. Create and switch to a new branch named `feat/add-drop-table-reference`.

#### HINTS

- Type `git checkout -b feat/add-drop-table-reference` into the terminal and press enter

## 520. Add DROP TABLE Command

### 520.1

Add a `drop` key to the `table` object of your JSON file. Give it a value for how to drop a table. The syntax is in the hints.

#### HINTS

- The value should be `"DROP TABLE table_name;"`
- Don't forget the commas to make it a valid json object
- The key looks like this: `"drop": "DROP TABLE table_name;"`
- The `table` object should look like this:
```json
"table": {
  "create": "CREATE TABLE table_name;",
  "drop": "DROP TABLE table_name;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name;",
    "drop": "DROP TABLE table_name;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 530. git status

### 530.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 535. git diff

### 535.1

Check the `diff` so you can confirm you like your changes.

#### HINTS

- Use the "git diff" command in your repo
- Type `git diff` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 540. git add DROP TABLE command

### 540.1

Add your changes to staging.

#### HINTS

- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 550. git commit feat: add drop table reference

### 550.1

Commit your staged changes with the message `feat: add drop table reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add drop table reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again
- Make sure you are in your `sql_reference` repo folder

## 560. git checkout main

### 560.1

Switch back your `main` branch so you can merge in these changes.

#### HINTS

- Use `git checkout branch_name` to switch to a branch
- Enter `git checkout main` into the terminal and press enter

## 570. git branch

### 570.1

Remember that the code and commit you added aren't on this branch, so they disappeared again. View the branches on your repo so you can get the name of it to merge your feature into the main branch.

#### HINTS

- Use `git branch` to view your branches
- Make sure you are in your `sql_reference` repo folder

## 580. git merge feat/add-drop-table-reference

### 580.1

Merge your feature branch into the `main` branch.

#### HINTS

- Here's an example: `git merge branch_name`
- The command will merge `branch_name` into whatever branch you are on
- Type `git merge feat/add-drop-table-reference` into the terminal and press enter
- Make sure you enter the command while on the `main` branch

## 590. git branch -d feat/add-drop-table-reference

### 590.1

The commit from your feature branch was added to the `main` branch so you can safely delete the feature branch. Delete your feature branch.

#### HINTS

- Use the `git branch` command with the `-d` flag to delete a branch
- Use the "git branch" command to find the branch name
- The branch name is `feat/add-drop-table-reference`
- Here's an example: `git branch -d branch_name`
- Type `git branch -d feat/add-drop-table-reference` into the terminal and press enter

## 600. git checkout -b feat/add-column-references

### 600.1

You're getting the hang of it :smile: The process is to create a branch, make the changes you want, commit them, and then merge the changes into branch you started on. Pretty simple, lets keep going. Create and checkout a new branch named `feat/add-column-references`

#### HINTS

- You can create and checkout a branch with `git checkout -b branch_name`
- Type `git checkout -b feat/add-column-references` into the terminal and press enter

## 610. Add ADD COLUMN command

### 610.1

This branch will be a work in progress. Add a `column` key to your JSON object. Make it an object like the other two. Give it a single property, `add`, that has the value `"ALTER TABLE table_name ADD COLUMN column_name;"`.

#### HINTS

- The `column` key should be on the same level as the `table` key
- The `column` object should look like this:
```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name;",
    "drop": "DROP TABLE table_name;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 620. git diff

### 620.1

View the `diff` to make sure your new changes are what you expect.

#### HINTS

- Use the "git diff" command
- Type `git diff` into the terminal and press enter
- Make sure you are in your repo folder first

## 630. git add ADD COLUMN command

### 630.1

Add your changes to staging. Here's a tip: you can use `git add .` to add all files to staging.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 640. git commit feat: add column reference

### 640.1

Commit your staged changes with the message `feat: add column reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add column reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 650. git log oneline

### 650.1

View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 670. git checkout main

### 670.1

The commit was added. I see an error in the syntax of one of the commands. You want to fix it, but this branch is not for fixing it. Switch back to your `main` branch so you can create a new branch to fix it.

#### HINTS

- Use `git checkout branch_name` to switch to a branch
- Enter `git checkout main` into the terminal and press enter

## 680. git checkout -b fix/create-table-syntax

### 680.1

Remember that, when you create a branch, it will be a clone of whatever branch you are on when you create it. That's why you switched to `main` first. Create and switch to a branch named `fix/create-table-syntax`.

#### HINTS

- Here's an example: `git checkout -b branch_name`
- Type `git checkout -b fix/create-table-syntax` into the terminal and press enter

## 690. Fix CREATE TABLE syntax

### 690.1

The create table command is a function, so it needs parenthesis `()` at the end. Add those to the end of the command.

#### HINTS

- It's the `table.create` key that you need to change
- The value should look like this: `CREATE TABLE table_name();`
- The `table` object should look like this:
```json
"table": {
  "create": "CREATE TABLE table_name();",
  "drop": "DROP TABLE table_name;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 700. git add FIX CREATE TABLE command

### 700.1

Check your status and diff to see your new changes. Then, add your files to staging.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 710. git commit fix: create table syntax

### 710.1

Commit your changes with the message `fix: create table syntax`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "fix: create table syntax"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 720. git checkout main

### 720.1

Switch back to your `main` so you can merge this important bug fix.

#### HINTS

- Use `git checkout branch_name` to switch to a branch
- Enter `git checkout main` into the terminal and press enter

## 730. git branch

### 730.1

View your branches to remind me of the branch name.

#### HINTS

- Use `git branch` to view your branches
- Make sure you are in your `sql_reference` repo folder

## 740. git merge fix/create-table-syntax

### 740.1

Merge your bug fix branch into this branch.

#### HINTS

- It's the `fix/create-table-syntax` branch
- Here's an example: `git merge branch_name`
- Type `git merge fix/create-table-syntax` into the terminal and press enter

## 750. git log oneline

### 750.1

View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 755. git branch -d fix/create-table-syntax

### 755.1

The bug fix is in and you can safely delete the branch. Go ahead and delete the branch that was for that fix. View your branches if you need to find the name.

#### HINTS

- Use the `git branch` command with the `-d` flag
- Here's an example: `git branch -d branch_name`
- The branch name is `fix/create-table-syntax`
- Type `git branch -d fix/create-table-syntax` into the terminal and press enter

## 760. git checkout feat/add-column-references

### 760.1

Your bug fix is merged into the `main` branch. Switch back to your feature branch so you can continue adding column references.

#### HINTS

- Check your branches if you need to get the name of the branch
- You can view your branches with `git branch`
- Use `git checkout branch_name` to switch to a branch
- It's the `feat/add-column-references` branch
- Enter `git checkout feat/add-column-references` into the terminal and press enter

## 770. git log oneline

### 770.1

View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 780. git rebase main

### 780.1

You created this branch and made a commit. Since then, a commit for a bug fix was added to `main`. This is common with many people working on a codebase simultaneously. You need to update this branch so it has the same commits from `main`, but you can't just merge that branch into this one. You need that bug fix commit to be in the same order here as it is on `main`, right after the "drop table" commit. You need to `rebase` this branch against `main` to do that. Enter `git rebase main` to rebase this branch.

#### HINTS

- Type `git rebase main` into the terminal and press enter

## 790. git log oneline

### 790.1

There was some fancy output there, but you can see the parenthesis from the bug fix commit were added to the `table.create` value. Show me the log again with the same flag you have been using so you can see what happened.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 800. Add DROP COLUMN command

### 800.1

The logs show that the bug fix commit from `main` was added, and then the commit from this branch was added on top of it. Now, when this branch is ready to be merged into `main`, it will have the same commit history. You should try to keep your branches up to date like this by rebasing them often. In your JSON file, add a `drop` key to the `column` object with a reference for dropping a column. The syntax is in the hints, give it a try first.

#### HINTS

- It follows a similar syntax as adding a column
- Don't forget the semi-colon at the end
- Here's the syntax: `ALTER TABLE table_name DROP COLUMN column_name;`
- Make sure the above value is in the `column.drop` key
- Here's what the `column` object should look like:
```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;",
  "drop": "ALTER TABLE table_name DROP COLUMN column_name;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 810. git add DROP COLUMN command

### 810.1

Check your status and diff to see your new changes. Then, add your changes to staging.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 820. git commit feat: drop column reference

### 820.1

Commit your changes with the message: `feat: add drop column reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add drop column reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 830. git log oneline

### 830.1

View your log again. Make sure you use my favorite flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 840. git checkout main

### 840.1

Switch to your `main` branch, there's another feature that needs to be worked on.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 850. git checkout -b feat/add-insert-row-reference

### 850.1

Create and switch to a new branch named `feat/add-insert-row-reference`.

#### HINTS

- Here's an example: `git checkout -b branch_name`
- Type `git checkout -b feat/add-insert-row-reference` into the terminal and press enter

## 860. Add INSERT ROW command

### 860.1

Pretend that this branch is for someone else working on a new feature at the same time you are working on the column commands. Add a `row` key to your JSON object. Make it an object with an `insert` key whose value is `"INSERT INTO table_name(columns) VALUES(values);"`

#### HINTS

- Your JSON object should have this:
```json
"row": {
  "insert": "INSERT INTO table_name(columns) VALUES(values);"
}
```
- The `row` key should be on the same level as the `table` key
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 870. git add INSERT ROW command

### 870.1

Check your status and diff so you can see your new changes. Then, add your changes to staging.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 880. git commit feat: add insert row reference

### 880.1

Commit your changes with the message: `feat: add insert row reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add insert row reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 890. git checkout main

### 890.1

This branch is finished. Switch to your `main` branch so you can merge this commit in.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 900. git branch

### 900.1

View your branches to find the name of the branch you want to merge.

#### HINTS

- Use `git branch` to view your branches
- Make sure you are in your `sql_reference` repo folder

## 910. git merge feat/add-insert-row-reference

### 910.1

Merge your branch with the `insert row` reference you were just working on into the `main` branch.

#### HINTS

- Use the `git merge` command
- Here's an example: `git merge branch_name`
- You want to merge the `feat/add-insert-row-reference` branch
- Type `git merge feat/add-insert-row-reference` into the terminal and press enter

## 930. git checkout feat/add-column-references

### 930.1

Check your logs to make sure the commit was added. Then, switch to your branch for adding column references.

#### HINTS

- Use the "git branch" command to find the name of the branch
- Use the `git checkout` command
- The branch you want to switch to is `feat/add-column-references`
- Here's an example: `git checkout branch_name`
- Enter `git checkout feat/add-column-references` into the terminal and press enter

## 940. git rebase main

### 940.1

Another commit was added to `main`, you should update this branch again. To be more specific, a rebase will "rewind" this branch to where it last matched `main`, then, add the commits from `main` that aren't here. After that, it adds the commits you made to this branch on top. `rebase` this branch against `main` so it's up to date. You should see a conflict...

#### HINTS

- Here's an example: `git rebase branch_name`
- Type `git rebase main` into the terminal and press enter

## 950. fix conflicts

### 950.1

The conflict arose because the first commit you added to this branch changed the same lines as the commit from `main`. So it tried to add the commit, but couldn't because something was already there. There are sections, separated by characters (`<`, `>`, and `=`), that represent the commit you are on (`HEAD`) and the commit that is trying to be added (`feat: add column reference`). Fix the conflict by removing those `<`, `>`, and `=` characters. Then making the JSON object valid again.

#### HINTS

- Be sure to remove all those special characters
- The part of the JSON object with conflicts should look like this:
```json
"row": {
  "insert": "INSERT INTO table_name(columns) VALUES(values);"
},
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 953. git status

### 953.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 956. git add fixed conflicts

### 956.1

It says that you are still in the middle of rebasing and there's one file that needs to be merged yet. Add the file to staging like you would any other commit.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 958. git status

### 958.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 960. git rebase continue

### 960.1

You fixed the conflicts that arose from trying to add this commit and added them to staging. It says `all conflicts fixed: run "git rebase --continue"`. Run the suggested command to continue the rebase.

#### HINTS

- Enter `git rebase --continue` in the terminal and press enter

## 970. git log oneline

### 970.1

The last commit was added after you continued the rebase without conflict. The rebase is now finished. View your log with the `oneline` flag.

#### HINTS

- Use the `git log` command
- Type `git log --oneline` into the terminal and press enter

## 980. Add RENAME COLUMN command

### 980.1

You can see the "insert row" commit from `main` was added to this branch before the two commits you made here. Now this branch is up to date and you can continue working on it. Add a `rename` key to the `column` object. The value should look like this: `"ALTER TABLE table_name RENAME COLUMN column_name TO new_name;"`

#### HINTS

- The `column` key should look like this:
```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;",
  "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
  "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
    "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces


## 990. git add RENAME COLUMN command

### 990.1

Check your status and diff to see your new changes. Then, add the file to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1000. git commit feat: add rename column reference

### 1000.1

Commit your changes with the message `feat: add rename column reference`

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add rename column reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1010. git checkout feat/add-insert-row-reference

### 1010.1

There's now three commits that are unique to this branch, you will come back to it later. Switch to the branch for adding row references.

#### HINTS

- View your branches with `git branch` if you need to find the name
- Use the `git checkout` command to switch branches
- Here's an example: `git checkout branch_name`
- The branch you want is `feat/add-insert-row-reference`
- Enter `git checkout feat/add-insert-row-reference` into the terminal and press enter

## 1015. Add UPDATE ROW command

### 1015.1

This branch is still up to date since no commits have been added to `main` since this branch was created. Add an `update` key to the `row` object with `"UPDATE table_name SET column_name = new_value WHERE condition;"` as it's value.

#### HINTS

- The `row` key should look like this:
```json
"row": {
  "insert": "INSERT INTO table_name(columns) VALUES(values);",
  "update": "UPDATE table_name SET column_name = new_value WHERE condition;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1017. git status

### 1017.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1020. git stash

### 1020.1

There's been a mistake. This branch was for the `insert` command, not the `update` command. You can put your changes aside with `git stash`. Stash your changes so you can add them to a different branch.

#### HINTS

- Type `git stash` in the terminal and press enter

## 1025. git status

### 1025.1

You might have noticed your uncommitted changes disappeared from the file. Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1030. git stash list

### 1030.1

Your working tree is clean and there's no changes git recognizes. The changes you made are stashed. View the things you have stashed with `git stash list`.

#### HINTS

- View your stash list with the suggested command
- Type `git stash list` in the terminal and press enter

## 1040. git stash pop

### 1040.1

You can see one item there. Bring the changes back with `git stash pop`.

#### HINTS

- Bring your stash back with the suggested command
- Type `git stash pop` in the terminal and press enter

## 1050. git stash list

### 1050.1

The changes from the stash reappeared in the file and git showed the status for you. You are right where you left of before stashing the changes. Popping a stash like that will remove the most recent stash and apply it to your working tree. View the list of your stashes again.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1055. git stash

### 1055.1

The list is empty again. Put the changes back in the stash.

#### HINTS

- Use the "git stash" command
- Type `git stash` in the terminal and press enter

## 1070. git stash list

### 1070.1

View the list of your stashed changes.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1073. git stash show

### 1073.1

The changes are stashed again. View a condensed version of the changes in the **latest** stash with `git stash show`.

#### HINTS

- Type `git stash show` in the terminal and press enter

## 1076. git stash show -p

### 1076.1

You can see what file was changed and how many lines were added and removed from the file. View the full changes of the latest stash with `git stash show -p`. `-p` stands for "patch".

#### HINTS

- Type `git stash show -p` in the terminal and press enter

## 1080. git stash apply

### 1080.1

Now you can see the actual changes that are stored in the stash. Before, you used the pop command to remove the latest stash and add it to your working tree. You can add the latest stash while keeping it in the list with `git stash apply`. Apply your stash with this method.

#### HINTS

- Type `git stash apply` in the terminal and press enter

## 1090. git stash list

### 1090.1

Git showed you your status after applying the stash. The one file is unstaged again. View your stash list.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1100. git stash

### 1100.1

The code from the stash was added to your working tree, and the stash is still there in case you want to add it somewhere else. Stash the changes again.

#### HINTS

- Use the "git stash" command
- Type `git stash` in the terminal and press enter

## 1110. git stash list

### 1110.1

View the list of your stashed changes again.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1113. git stash show stash@{1}

### 1113.1

Now there's two things stashed. You can use the name at the front of each stash (`stash@{#}`) with many of the stash commands to select one other than the latest one. The most recent stash is the one at the top, `stash@{0}`. View the condensed changes of the **oldest** stash with the `git stash show` command by putting the name of the stash after it.

#### HINTS

- Add the stash name at the end of the `git stash show` command
- The stash name is `stash@{1}`
- Type `git stash show stash@{1}` in the terminal and press enter

## 1116. git stash show -p stash@{1}

### 1116.1

Next, using a similar method, **show** the full changes of the **oldest** stash with the "patch" flag you used earlier.

#### HINTS

- The patch flag is `-p`
- Use the `git stash show` command with the patch flag
- Include the stash you want to view at the end of the command
- The stash you want to view is `stash@{1}`
- Type `git stash show -p stash@{1}` in the terminal and press enter

## 1120. git stash drop

### 1120.1

There's two identical items in your stash. Drop one of them with `git stash drop` or `git stash drop <stash_name>`.

#### HINTS

- Drop one of the stashed changes with the suggested command
- Type `git stash drop` in the terminal and press enter

## 1130. git stash list

### 1130.1

View the list of stashed changes again to verify the one got deleted.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1140. git checkout main

### 1140.1

You should just have the one stash left. Switch to your `main` branch so you can create a new branch from that and add these changes to it.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1150. git branch -d feat/add-insert-row-reference

### 1150.1

Before I make you work on the wrong branch again. Delete the branch for inserting a row.

#### HINTS

- View your branches if you need to find the name
- Use the `git branch` command with the `-d` flag
- The branch name is `feat/add-insert-row-reference`
- Here's an example: `git branch -d branch_name`
- Type `git branch -d feat/add-insert-row-reference` into the terminal and press enter

## 1160. git checkout feat/add-more-row-references

### 1160.1

Create and checkout a new branch named `feat/add-more-row-references` for adding some more row related commands.

#### HINTS

- Use the "git checkout" command with the `-b` flag
- Here's an example: `git checkout -b branch_name`
- Type `git checkout -b feat/add-more-row-references` into the terminal and press enter

## 1170. git stash list

### 1170.1

Show me your stash list again to make sure your changes from the other branch are still stashed.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1180. git stash pop

### 1180.1

It's still there. Pop the stash so the code gets added to this new branch.

#### HINTS

- Use the "git stash pop" command in your repo
- Type `git stash pop` in the terminal and press enter

## 1190. git stash list

### 1190.1

Git showed you your status again, and it looks like it recognizes that the file has new changes after adding the stash. View the stash list to verify that it's empty.

#### HINTS

- Use the "git stash list" command in your repo
- Type `git stash list` in the terminal and press enter

## 1210. git diff

### 1210.1

The list is empty. View the diff of your changes so you can make sure they are what you expect.

#### HINTS

- Use the "git diff" command
- Type `git diff` into the terminal and press enter
- Make sure you are in your repo folder first

## 1220. git add UPDATE ROW command

### 1220.1

It looks good. Add the changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1230. git commit feat: add update row reference

### 1230.1

View your status, then commit the staged changes with the message `feat: add update row reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add update row reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1240. git checkout main

### 1240.1

Your work on this branch is done for now. Switch to your `main` branch so you can merge the commit you just made.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1250. git merge feat/add-more-row-references

### 1250.1

Merge your branch for adding row references that you just added a commit to.

#### HINTS

- Use the "git merge" command
- View your branches if you need to find the name
- It's the `feat/add-more-row-references` branch
- Here's an example: `git merge branch_name`
- Type `git merge feat/add-more-row-references` into the terminal and press enter

## 1260. git checkout feat/add-column-references

### 1260.1

Switch to your branch for the column references so you can continue working on that.

#### HINTS

- Use the `git checkout` command
- View your branches if you need to find the name
- Here's an example: `git checkout branch_name`
- Enter `git checkout feat/add-column-references` into the terminal and press enter

## 1270. git rebase main

### 1270.1

Once again, commits have been added to `main` so you should update this branch. Rebase this branch against `main` to bring in the new commits. You should get a conflict.

#### HINTS

- Use the "git rebase" command
- Add the branch after the command that you want to rebase against
- Here's an example: `git rebase branch_name`
- Type `git rebase main` into the terminal and press enter

## 1280. Fix Conflicts

### 1280.1

This conflict is a little trickier. Make the JSON object whole again so you can add the changes and finish rebasing. Make sure you put all the references in their correct objects, and in the same order they were originally in. There may be a duplicate line you need to delete.

#### HINTS

- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1290. git status

### 1290.1

View the status of your repo.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1300. git add fixed conflicts

### 1300.1

You are still rebasing. You fixed the conflicts for the commit trying to be added. It looks like it was the "add column" commit that had the conflict. Add your changes to staging.

#### HINTS

- Use the "git add" command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1305. git status

### 1305.1

View the status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1310. git rebase continue

### 1310.1

Continue your rebase with the suggested command.

#### HINTS

- View the output in the terminal to find the command
- It's the "git rebase continue" command
- Enter `git rebase --continue` in the terminal and press enter

## 1320. git log oneline

### 1320.1

The rest of the commits were added without conflict. View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 1330. Add PRIMARY KEY command

### 1330.1

The rebase added the "row" commits where they are supposed to be, then the "column" commits from this branch on top. Excellent. Now you can continue working on it. Add a reference to the column object for setting a column as the primary key. Give it a key of `primary_key` and a value of `"ALTER TABLE table_name ADD PRIMARY KEY(column_name);"`

#### HINTS

- The `column` key should look like this:
```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;",
  "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
  "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
  "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
    "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
    "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1340. git diff PRIMARY KEY command

### 1340.1

Check the diff to make sure you like your changes. Then, add the changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1350. git commit feat: add primary key reference

### 1350.1

Commit your staged files with `feat: add primary key reference` as the message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add primary key reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1352. Add FOREIGN KEY command

### 1352.1

Add `foreign_key` to the `column` object for another command. It's value should be `"ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);"`.

#### HINTS

- The `column` key should look like this:
```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;",
  "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
  "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
  "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);",
  "foreign_key": "ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
    "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
    "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);",
    "foreign_key": "ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1354. git add FOREIGN command

### 1354.1

Check the diff to make sure you like the changes, then add the changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1356. git commit feat: add foreign key reference

### 1356.1

Commit the changes with `feat: add foreign key reference` as its message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add foreign key reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1360. git checkout feat/add-more-row-references

### 1360.1

Go to your branch for the row references so you can continue work on those.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Use the `git branch` command to find the name of the branch
- It's the `feat/add-more-row-references` branch
- Enter `git checkout feat/add-more-row-references` into the terminal and press enter

## 1370. Add DELETE ROW command

### 1370.1

In your JSON file, add a `delete` key to the `row` object. Take a guess at the value, it should include the `DELETE FROM` and `WHERE` keywords. The whole value is in the hints.

#### HINTS

- The `row.delete` value should be `"DELETE FROM table_name WHERE condition;"`
- The `row` key should look like this:
```json
"row": {
  "insert": "INSERT INTO table_name(columns) VALUES(values);",
  "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
  "delete": "DELETE FROM table_name WHERE condition;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
    "delete": "DELETE FROM table_name WHERE condition;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1380. git add DELETE ROW command

### 1380.1

View the diff of your changes, then add them to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1390. git commit feat: add delete row reference

### 1390.1

Commit the staged changes with the message `feat: add delete row reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add delete row reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1400. git checkout main

### 1400.1

Go to the `main` branch so you can merge these commits.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1410. git merge feat/add-more-row-references

### 1410.1

Merge the branch for the row commands into `main`.

#### HINTS

- Use the "git merge" command
- Here's an example: `git merge branch_name`
- Use the `git branch` command if you need to find the branch name
- It's the `feat/add-more-row-references` branch
- Type `git merge feat/add-more-row-references` into the terminal and press enter

## 1416. git branch -d feat/add-more-row-references

### 1416.1

You merged the branch and are done with it. Delete the branch for the row references.

#### HINTS

- Use the `git branch` command with the `-d` flag
- Here's an example: `git branch -d branch_name`
- View your branches if you need to find the name
- The branch name is `feat/add-more-row-references`
- Type `git branch -d feat/add-more-row-references` into the terminal and press enter

## 1420. git checkout -b fix/add-missing-rename-references

### 1420.1

I missed a bunch of the rename commands when I had you work on a few of the objects. Create and checkout a branch named `fix/add-missing-rename-references`.

#### HINTS

- Use the `git checkout` command with the `-b` flag
- Here's an example: `git checkout -b branch_name`
- Type `git checkout -b fix/add-missing-rename-references` into the terminal and press enter

## 1430. Add RENAME DATABASE command

### 1430.1

I forgot to add a command for how to rename a database. In your JSON file, add a `rename` key to the `database` object. The value should be `"ALTER DATABASE database_name RENAME TO new_name;"`

#### HINTS

- The `database` object should look like this:
```json
"database": {
  "create": "CREATE DATABASE database_name;",
  "drop": "DROP DATABASE database_name;",
  "rename": "ALTER DATABASE database_name RENAME TO new_name;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;",
    "rename": "ALTER DATABASE database_name RENAME TO new_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
    "delete": "DELETE FROM table_name WHERE condition;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1440. git add RENAME DATABASE command

### 1440.1

View the diff of your changes to make sure you like them, then add them to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1450. git commit fix: add missing rename database reference

### 1450.1

Commit your stages changes with `fix: add missing rename database reference` for the message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "fix: add missing rename database reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1460. git checkout feat/add-column-references

### 1460.1

Leave this branch for now. Switch back to your branch for the column references so you can hopefully finally finish it.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Use the `git branch` command to find the name of the branch
- It's the `feat/add-column-references` branch
- Enter `git checkout feat/add-column-references` into the terminal and press enter

## 1470. git rebase main

### 1470.1

There was a commit to `main` since you last worked on this from when you merged the "add more row references" branch. Rebase this branch against `main` so it's up to date and you can finish working on it.

#### HINTS

- Use the "git rebase" command
- Add the branch after the command that you want to rebase against
- Here's an example: `git rebase branch_name`
- Type `git rebase main` into the terminal and press enter

## 1480. Fix Conflicts

### 1480.1

Fix the conflicts so that all the commands are in their correct objects.

#### HINTS

- Be sure to delete any special characters
- The order of the keys should be:
```json
{
  "database": {},
  "table": {},
  "row": {},
  "column": {}
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
    "delete": "DELETE FROM table_name WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1490. git add Fixed Conflicts

### 1490.1

You fixed the conflicts. Check your status, then add your files to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1495. git status

### 1495.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1500. git rebase continue

### 1500.1

Use the suggested command to continue your rebase.

#### HINTS

- View the output in the terminal to find the command
- It's the "git rebase continue" command
- Enter `git rebase --continue` in the terminal and press enter

## 1510. Add UNIQUE command

### 1510.1

There was a conflict when it tried to add the first commit from this branch on top of the one that was brought in from `main`. The rest of the commits were added without conflicts. In your JSON file, add a `unique` key to the `column` object. Give it a value of `"ALTER TABLE table_name ADD UNIQUE(column_name);"`

#### HINTS

- The should be `"unique": "ALTER TABLE table_name ADD UNIQUE(column_name);"` in your `column` object
- The `column` object should look like this:
```json
"column": {
  "add": "ALTER TABLE table_name ADD COLUMN column_name;",
  "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
  "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
  "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);",
  "foreign_key": "ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);",
  "unique": "ALTER TABLE table_name ADD UNIQUE(column_name);"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
    "delete": "DELETE FROM table_name WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
    "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
    "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);",
    "foreign_key": "ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);",
    "unique": "ALTER TABLE table_name ADD UNIQUE(column_name);"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1520. git add UNIQUE command

### 1520.1

View the diff to make sure you like the changes, then add the changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1530. git commit feat: add unique reference

### 1530.1

Commit the stages files with `feat: add unique reference` for the message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add unique reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1533. git reset HEAD~1

### 1533.1

I'm going to show you a few ways to remove or undo a commit. The first is to simply "travel back in time". You can use the `git reset` command to travel to any point in your commit history. Your current `HEAD` is a reference to the last commit you just made. Use `git reset HEAD~1` to go back one before `HEAD`.

#### HINTS

- Enter `git reset HEAD~1` in the terminal

## 1536. git log oneline

### 1536.1

This is a "mixed" reset and will put the changes from the commit you undid in your working tree. You can see that it says there's unstaged changes after the reset to your file. View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 1539. git status

### 1539.1

Your commit for how to set a column to unique is gone. View your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1540. git diff

### 1540.1

View the diff.

#### HINTS

- Use the "git diff" command
- Type `git diff` into the terminal and press enter

## 1542. git add UNIQUE command

### 1542.1

And the changes from the reset are back in the working tree. So when you `reset` to one commit before `HEAD`, it removed the most recent commit, and put all the changes in the working tree. If you used the `--hard` flag with the reset, the changes would have not been added to the working tree and if you used the `--soft` flag, the changes would have been added to the working tree and to staging. Add the changes back to staging so you can commit them again.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1545. git commit feat: add unique reference

### 1545.1

Commit the change staged files with `feat: add unique reference` for its message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add unique reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1548. git revert HEAD

### 1548.1

Reverting is a good way to undo a commit because you don't lose the commit from the history. You can revert the most recent commit (`HEAD`) with `git revert HEAD`. Do that now.

#### HINTS

- Enter the suggested command
- Enter `git revert HEAD` in the terminal

## 1549. Nano: Enter git revert HEAD Message

### 1549.1

Git put you into Nano and is asking you enter a commit message for the revert, but they added a default one for you. Don't change anything in Nano, just exit the file to use the default message. You can exit the file by pressing `ctrl+x`.

#### HINTS

- Exit the file by pressing `ctrl+x`
- If you accidentally changed something in Nano, press `n` after `ctrl+x` to discard the changes
- Your last commit message should be `Revert "feat: add unique reference"`
- View your log to make sure the message is correct
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git revert HEAD` after it's done resetting

## 1551. git log oneline

### 1551.1

View the log with that flag I like again.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter
- Press enter until you have seen the whole log

## 1554. git show

### 1554.1

Using revert to undo that commit added another commit that is the exact opposite of it. Enter `git show` into the terminal to see the last commit added (now `HEAD`) and its details.

#### HINTS

- Enter the suggested command
- Type `git show` in the terminal and press enter
- Press enter until you have seen the whole message

## 1557. git show HEAD~1

### 1557.1

Type `git show HEAD~1` to take a look at the details of the original commit that you reverted.

#### HINTS

- Enter the suggested command
- Type `git show` in the terminal and press enter

## 1560. git rebase interactive HEAD~2

### 1560.1

If you look at the bottom of those two messages, it shows the diff. The diff of the revert commit is the exact opposite of the one before it. Effectively, undoing the changes. You've used rebase to update this branch, but you can enter an "interactive" mode to manipulate commits. Type `git rebase --interactive HEAD~2` into the terminal to enter this mode. The `HEAD~2` means you will have a chance to change the last two commits.

#### HINTS

- Enter the suggested command
- Type `git rebase --interactive HEAD~2` into the terminal and press enter
- If you entered the wrong command, save and exit Nano. Then try again
- You can save and exit Nano by pressing `ctrl+x` then `y` then `enter`

## 1563. Nano: Drop UNIQUE commits

### 1563.1

At the top of Nano, you can see the two commits with `pick` next to them. Below them, there's a list of options for working with them. `pick` means that it will use the commits as they were. At the bottom, it says, `d, drop = remove commit`. Replace the word `pick` preceeding your two commits with a `d` to drop them both. When you are done, save the file and exit Nano.

#### HINTS

- You can save and exit Nano by pressing `ctrl+x` then `y` then `enter`
- The most recent commit message should be `feat: add foreign key reference`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~2` after it's done resetting

## 1564. git log oneline

### 1564.1

View your log. Use the `--oneline` flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter
- Press enter until you have seen the whole history

## 1567. git rebase interactive root

### 1567.1

Both, the commit to add the unique command and the one to revert it, were dropped. Enter another `--interactive` rebase that goes back to the `--root` instead of `HEAD~2`. I am going to show you how to change a commit message. `--root` means that the rebase will go back to your very first commit.

#### HINTS

- The command is `git rebase` with two arguments
- The two arguments are `--interactive` and `--root`
- Enter `git rebase --interactive --root` into the terminal and press enter

## 1570. Nano: Select Reword Column References Commit

### 1570.1

You can see that the latest commit is at the bottom here. Be careful not to change the wrong commits. One of the options is `r, reword = use commit, but edit the commit message`. Replace `pick` with an `r` next to the commit with the message `feat: add column reference` to reword the message, it's the very first commit you added to this branch. When you are done, save the file and exit Nano. Git will put you in another Nano instance to reword the commit message. Don't change anything in it yet.

#### HINTS

- Replace `pick` with an `r` next to the suggested commit
- Save and exit the file by pressing `ctrl+x` then `y` then `enter`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive --root` after it's done resetting

## 1572. Nano: Change Column References Commit Message

### 1572.1

Git is waiting for you to edit the commit message. Add an `s` at the end of the commit message so it is `feat: add column references`. When you are done, save the file and exit Nano.

#### HINTS

- Save and exit the file by pressing `ctrl+x` then `y` then `enter`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive --root` after it's done resetting. Then, in nano, replace `pick` with an `r` next to the `feat: add column reference` commit, and save and exit

## 1575. git log oneline

### 1575.1

View your log. Use the `--oneline` flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter
- Press enter until you have seen the whole history

## 1576. git rebase main

### 1576.1

The message was reworded, but there's a problem. Look at the commit hash for your `Initial commit` from the last two times you viewed the log, it's that string left of the log. They aren't the same anymore since you rebased back to the root. Same goes for the rest of the commits. When you rebase interactively it changes all those hashes, so git sees them as different commits. If you were to try and merge this into `main`, it wouldn't work because they don't share the same history anymore. For this reason, you don't want to do an interactive rebase where you go back passed commits unique to the branch you are on. Fortunately, you can fix this. Enter `git rebase main` to realign the history of the two branches.

#### HINTS

- Use the "git rebase" command
- Add the branch after the command that you want to rebase against
- Here's an example: `git rebase branch_name`
- Type `git rebase main` into the terminal and press enter

## 1578. git log oneline

### 1578.1

View your log again. Use the `--oneline` flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 1580. git rebase interactive HEAD~5

### 1580.1

Now the hashes are the same as they were before you rebased back to `--root`, which is what they are on `main`. Enter another interactive rebase. Go back to the first commit you added to this branch, it's `HEAD~5`.

#### HINTS

- It's the `git rebase` command with two arguments
- The two arguments are `--interactive` and `HEAD~5`
- Enter `git rebase --interactive HEAD~5` into the terminal and press enter
- If you entered the wrong command, exit nano without changing anything. Then try again.
- You can exit nano by pressing `ctrl+x`
- If you accidentally changed something in Nano, press `n` after `ctrl+x` to discard the changes

## 1590. Nano: Squash feat/add-column-references Commits

### 1590.1

Squashing commits means that you will take a bunch of commits and turn them into one. This is helpful to keep your commit history clean and something you want try to do. Replace `pick` with an `s` next to all your commits except the one with the message `feat: add column references`. When you are done, save and exit the file. You will find yourself in another instance of Nano. Don't change anything in it yet.

#### HINTS

- Replace `pick` with an `s` next to the suggested commits
- Save and exit the file by pressing `ctrl+x` then `y` then `enter`
- The most recent commit message should be `feat: add column references`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~5` after it's done resetting

## 1595. Nano: Save and Exit to Squash

### 1595.1

Nano brought up a list of all the commit messages you used for the commits. Don't change anything in there, just exit the file to use those messages and finish squashing the commits.

#### HINTS

- Press `ctrl+x` to exit the file
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~5` after it's done resetting. Then, in nano, replace `pick` with an `s` next to all the commits except the `feat: add column reference` commit, and save and exit

## 1600. git log oneline

### 1600.1

View your log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 1610. git log -1

### 1610.1

Now all the "column" commits you made to this branch have been squashed into just the one commit at the top. View the log again, but use `-1` instead of `--oneline` this time to view only the last commit.

#### HINTS

- Use `git log` with the suggested argument
- Type `git log -1` into the terminal and press enter

## 1620. git checkout main

### 1620.1

You can see that your one commit has all the messages that were in Nano, which are all of the commits you made to this branch squashed into one commit. I think you are finally done with this branch. Go to your `main` branch so it can get merged.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1630. git merge feat/add-column-references

### 1630.1

Merge your branch for adding column commands into this one.

#### HINTS

- Use the `git merge` command with the branch name after it
- Here's an example: `git merge branch_name`
- Use the `git branch` command if you need to find the branch name
- It's the `feat/add-column-references` branch
- Type `git merge feat/add-column-references` into the terminal and press enter
- If you got `fatal: refusing to merge unrelated histories`, you need to switch back to the feature branch, enter `git rebase main` to align the histories, then come back to `main` and try again

## 1635. git branch -d feat/add-column-references

### 1635.1

Hopefully, there were no conflicts. Delete your branch for adding information about column commands since you are done with it.

#### HINTS

- Use the `git branch` command with the `-d` flag
- Here's an example: `git branch -d branch_name`
- View your branches if you need to find the name
- The branch name is `feat/add-column-references`
- Type `git branch -d feat/add-column-references` into the terminal and press enter

## 1640. git checkout fix/add-missing-rename-references

### 1640.1

Go to your branch for adding the commands that were missing. There's one more to add.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Use the `git branch` command to find the name of the branch
- It's the `fix/add-missing-rename-references` branch
- Enter `git checkout fix/add-missing-rename-references` into the terminal and press enter

## 1650. git rebase main

### 1650.1

There was added a commit to `main` since you last worked on this. Update this branch with a rebase against main.

#### HINTS

- Use the "git rebase" command
- Add the branch after the command that you want to rebase against
- Here's an example: `git rebase branch_name`
- Type `git rebase main` into the terminal and press enter

## 1680. git log -5 oneline

### 1680.1

You viewed the most recent log with a `-1` flag. You can view the last `x` number of commits with any number instead of `1`. View the last five commits with the oneline flag.

#### HINTS

- Use the `git log` command with the correct two arguments
- The two arguments are `-5` and `--oneline`
- Type `git log -5 --oneline` into the terminal and press enter

## 1690. Add RENAME TABLE Command

### 1690.1

This branch is up to date now. In your JSON file, add a `rename` key to the `table` object. The value is in the hints, but give it a try first. It follows a similar structure as the rest of them.

#### HINTS

- The value is `"ALTER TABLE table_name RENAME TO new_name;"`
- The `table` object should look like this:
```json
{
  "create": "CREATE TABLE table_name();",
  "drop": "DROP TABLE table_name;",
  "rename": "ALTER TABLE table_name RENAME TO new_name;"
}
```
- The whole file should look like this:
```json
{
  "database": {
    "create": "CREATE DATABASE database_name;",
    "drop": "DROP DATABASE database_name;",
    "rename": "ALTER DATABASE database_name RENAME TO new_name;"
  },
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;",
    "rename": "ALTER TABLE table_name RENAME TO new_name;"
  },
  "row": {
    "insert": "INSERT INTO table_name(columns) VALUES(values);",
    "update": "UPDATE table_name SET column_name = new_value WHERE condition;",
    "delete": "DELETE FROM table_name WHERE condition;"
  },
  "column": {
    "add": "ALTER TABLE table_name ADD COLUMN column_name;",
    "drop": "ALTER TABLE table_name DROP COLUMN column_name;",
    "rename": "ALTER TABLE table_name RENAME COLUMN column_name TO new_name;",
    "primary_key": "ALTER TABLE table_name ADD PRIMARY KEY(column_name);",
    "foreign_key": "ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES table_name(column_name);"
  }
}

```
- Make sure there's one empty line at the bottom of the file and no extra spaces after any of the values or curly brackets
- You can view the `git diff` to see if there's any extra spaces

## 1700. git add RENAME TABLE command

### 1700.1

Check the diff of your changes, then add them changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter

## 1710. git commit fix: add missing rename table reference

### 1710.1

Commit your staged changes with the message, `fix: add missing rename table reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "fix: add missing rename table reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1715. git log -5 oneline

### 1715.1

View your last five logs with the oneline flag again.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Use `-5` with your `git log --oneline` command
- Type `git log --oneline -5` into the terminal and press enter

## 1720. git rebase interactive HEAD~2

### 1720.1

You have two commits on this branch that could be squashed. Enter an interactive rebase that goes back to `HEAD~2` so you can squash them.

#### HINTS

- It's the `git rebase` command with two arguments
- The two arguments and `--interactive` and `HEAD~2`
- Enter `git rebase --interactive HEAD~2` into the terminal and press enter
- If you entered the wrong command, save and exit nano without changing anything. Then try again
- You can save and exit nano by pressing `ctrl+x` then `y` then `enter`

## 1730. Nano: Squash feat/add-missing-rename-references Commits

### 1730.1

Replace `pick` with `s` next to your commit for adding the rename table reference to squash it. Be careful not to do the wrong one. When you are done, save and exit Nano.

#### HINTS

- Replace `pick` with `s` next to your `fix: add missing rename table reference` commit
- You can save and exit nano by pressing `ctrl+x` then `y` then `enter`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~2` after it's done resetting

## 1735. Nano: Add Missing Renames Commit Message

### 1735.1

The lines that don't start with a `#` will be the commit messages. Add a new message at the top of the file on it's own line. Give it the text, `fix: add missing rename references`. When you are done, save and exit the file.

#### HINTS

- You can save and exit nano by pressing `ctrl+x` then `y` then `enter`
- The most recent commit message should be `fix: add missing rename references`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~2` after it's done resetting. Then, in nano, replace `pick` with `s` next to your `fix: add missing rename table reference` commit, and save and exit

## 1737. git log -1

### 1737.1

View only the last commit in your log to see your squashed commit.

#### HINTS

- Use the `git log` command
- View the last `x` number of commits with `-x`
- Use `-1` with the command
- Type `git log -1` into the terminal and press enter

## 1740. git checkout main

### 1740.1

I think this branch is ready to go. Switch to `main` so you can merge it.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1750. git merge fix/add-missing-rename-references

### 1750.1

Merge your branch for adding the rename commands into `main`.

#### HINTS

- Use the `git merge` command with the branch name after it
- Here's an example: `git merge branch_name`
- Use the `git branch` command if you need to find the branch name
- It's the `fix/add-missing-rename-references` branch
- Type `git merge fix/add-missing-rename-references` into the terminal and press enter

## 1760. git branch

### 1760.1

View your branches.

#### HINTS

- Use `git branch` to view your branches
- Make sure you are in your `sql_reference` repo folder

## 1770. git branch -d all but main

### 1770.1

Delete all your branches except `main`.

#### HINTS

- Use the `git branch` command with the `-d` flag
- Here's an example: `git branch -d branch_name`
- The branch name is `fix/add-missing-rename-references`
- Type `git branch -d fix/add-missing-rename-references` into the terminal and press enter

## 1780. git log oneline

### 1780.1

I think the file is complete, thanks for making this for me. View the log with the oneline flag.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 1790. git checkout -b feat/add-gitignore

### 1790.1

That's a nice looking commit history. There's one more thing you should learn. Create and checkout a branch named `feat/add-gitignore`.

#### HINTS

- Use the `git checkout` command with the `-b` flag
- Here's an example: `git checkout -b branch_name`
- Type `git checkout -b feat/add-gitignore` into the terminal and press enter

## 1800. touch .env

### 1800.1

Use the `touch` command to create a file named `.env` in your repo.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch .env` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder

## 1810. Add SECRETS to .env

### 1810.1

`.env` files are used to store environment variables for running code. Often times, there may be sensitive information in it. Add the text `SECRET=MY_SECRET` to the file.

#### HINTS

- Add the suggested text to the `.env` file
- Add `SECRET=MY_SECRET` to the `.env` file
- Make sure there's nothing else in the file

## 1820. git status

### 1820.1

View your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1830. touch .gitignore

### 1830.1

You can see the `.env` file is new. Use `touch` again to create another file named `.gitignore` in your repo.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch .gitignore` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder

## 1835. git status

### 1835.1

View the status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1840. Add .env to .gitignore

### 1840.1

Now there's two new files that aren't tracked yet. Add the text `.env` to your `.gitignore` file.

#### HINTS

- Add `.env` to the `.gitignore` file
- Make sure there's nothing else in the file

## 1850. git status

### 1850.1

View the status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1860. git add .gitignore

### 1860.1

Now the `.env` file is being ignored by git because you added it to the `.gitignore` file. There are often a number of things you don't want to include in a repository, especially if it's publicly visible. Now, you know how to keep them from being tracked by git. Add your new changes to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add sql_reference.json` to add changes to staging
- Type `git add .gitignore` into the terminal and press enter

## 1870. git commit feat: add .gitignore

### 1870.1

Commit your changes with `feat: add .gitignore` for the message.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add .gitignore"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1880. touch sample.env

### 1880.1

Use touch to create another file named `sample.env` in your repo.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch sample.env` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder

## 1890. git status

### 1890.1

View the status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 1900. Add SECRET= to sample.env

### 1900.1

Git won't ignore this file. Sensitive information can be stored in the `.env` file, but people need to know the variables that are in there so they can run a repository locally. Add `SECRET=` to `sample.env`.

#### HINTS

- Add the suggested text to the `sample.env` file

## 1930. git add sample.env

### 1930.1

Now, when someone wants to run your repo, they will know that they need to create a `.env` file and add a value in it for `SECRET`. Add your new file to staging.

#### HINTS

- Use the `git add` command
- Here's an example: `git add file_name`
- You previously used `git add sql_reference.json` to add changes to staging
- Type `git add sample.env` into the terminal and press enter

## 1940. git commit feat: add sample.env

### 1940.1

Commit the new changes with the message `feat: add sample.env`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add sample.env"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Or, reset the lesson and try again

## 1945. git log -5 oneline

### 1945.1

View the last five commits in your log with the oneline flag.

#### HINTS

- Use the `git log` command with two flags
- Use `-5` and `--oneline` with the command
- Type `git log -5 --oneline` into the terminal and press enter

## 1950. git rebase HEAD~2

### 1950.1

The two commits you made to this branch can be squashed. Do an interactive rebase that goes back to all the commits unique to this branch (`HEAD~2`).

#### HINTS

- It's the `git rebase` command with two arguments
- Use `--interactive` and `HEAD~2` with the command
- Enter `git rebase --interactive HEAD~2` into the terminal and press enter

## 1960. Nano: Squash feat/add-gitignore Commits

### 1960.1

Squash your commit that was for adding the `sample.env` file. When you are done, save the file and exit Nano.

#### HINTS

- Replace `pick` with `s` next to the suggested commit
- It's the `feat: add sample.env` commit
- You can save and exit by pressing `ctrl+x` then `y` then `enter`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~2` after it's done resetting

## 1962. Nano: Add Message + Save and Exit

### 1962.1

Add a new message at the very top of the file, `feat: add .gitignore and sample.env`. When you are done, save and exit the file.

#### HINTS

- Add the suggested message on it's own line above the other messages
- You can save and exit by pressing `ctrl+x` then `y` then `enter`
- The most recent commit message should be `feat: add .gitignore and sample.env`
- To reset this lesson, make sure nano is closed. Then, hit reset and enter `git rebase --interactive HEAD~2` after it's done resetting. Then, in nano, replace `pick` with `s` next to your `feat: add sample.env` commit, and save and exit

## 1964. git log -1

### 1964.1

View only the last commit in your log.

#### HINTS

- Use the `git log` command with the correct argument
- View the last `x` number of commits with `-x`
- Use `-1` with the command
- Type `git log -1` into the terminal and press enter

## 1970. git checkout main

### 1970.1

Switch back to `main` so you can add this in.

#### HINTS

- Use the `git checkout` command
- Here's an example: `git checkout branch_name`
- Enter `git checkout main` into the terminal and press enter

## 1980. git merge feat/add-gitignore

### 1980.1

Merge the branch you just made into here.

#### HINTS

- Use the `git merge` command with the branch name after it
- Here's an example: `git merge branch_name`
- Use the `git branch` command if you need to find the branch name
- It's the `feat/add-gitignore` branch
- Type `git merge feat/add-gitignore` into the terminal and press enter
- If you got `fatal: refusing to merge unrelated histories`, you need to switch back to the feature branch, enter `git rebase main` to align the histories, then come back to `main` and try again

## 1990. git branch -d feat/add-gitignore

### 1990.1

Delete the feature branch you just merged.

#### HINTS

- Use the `git branch` command with the `-d` flag
- Here's an example: `git branch -d branch_name`
- Use just `git branch` if you need to find the branch name
- The branch name is `feat/add-gitignore`
- Type `git branch -d feat/add-gitignore` into the terminal and press enter

## 1995. git log oneline

### 1995.1

I think it's all finished. View your log with the oneline flag to see your whole history.

#### HINTS

- Use the `git log` command with the correct flag
- It's the `--oneline` flag
- Type `git log --oneline` into the terminal and press enter

## 2000. git log

### 2000.1

Looks great :smile: View the log one last time, without any flags, to see the details of all the commits. Congratulations, you are finished with your repo for now.

#### HINTS

- Use the `git log` command
- Don't use any flags with the command
- Press enter until you have seen the whole log
