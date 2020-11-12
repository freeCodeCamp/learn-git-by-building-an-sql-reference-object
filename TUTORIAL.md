# Introduction

> Welcome to the git lessons!

## 10. Start Terminal

### 10.1

The first thing you need to do is start the terminal. Open a new one by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello git` into the terminal and press enter.

#### HINTS

- Follow the directions closely
- If the tests don't pass, trash all the terminals and redo those instructions

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

Git is a version control system to keep track of your code. This folder will be your git repository. To turn it into one, type `git init` into the terminal from this folder.

#### HINTS

- Enter `git init` into the terminal while in the `sql_reference` folder
- Make sure you are in the `sql_reference` folder first
- Enter `cd ~/project/sql_reference` to get to the folder if you aren't there

## 50. View git Folder

### 50.1

Use the list command with the `-a` flag to list the hidden folders and files.

#### HINTS

- The list command is `ls`
- Type `ls -a` into the terminal and press enter
- Make sure you are in the `sql_reference` folder first
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 60. Git Status

### 60.1

The `git init` command created that `.git` folder for you. It's what keeps track of all the things in your repository. Use `git status` to see the status of where you are. This command will be your best friend.

#### HINTS

- Type `git status` into the terminal and press enter
- Make sure you are in the `sql_reference` folder first
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 70. Checkout main Branch

### 70.1

A git repository has different branches to help keep track things you are doing to your code. It's common to have a `main` branch which might be for your production code, and other branches for adding new features or fixing bugs. You are on the `master` branch. You can switch to a new branch with `git checkout -b new_branch`. Use that command to switch to a new branch named `main`.

#### HINTS

- Capitalization matters
- Type `git checkout -b main` into the terminal
- Make sure you are in your `sql-reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 80. Git Status

### 80.1

Check your status again with `git status`.

#### HINTS

- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 90. Touch README.md

### 90.1

Now you are on the `main` branch. Use the touch command to create `README.md` inside your repository. This is a file you will see in many repos to describe what the repo is for.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch README.md` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 100. Add Readme Title

### 100.1

Add `SQL Reference` at the top of your new file to let people know what your repo is for.

#### HINTS

- Add the suggested text in your `README.md` file

## 110. Git status

### 110.1

Check the status of your repo again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 120. Git add README.md

### 120.1

The file you created has not been added to git yet so it is showing that it is untracked. There's two steps to make git keep track of it for you. First you need to add it to the staging area like this: `git add file_name`. Add your `README.md` file to the staging area.

#### HINTS

- Replace `file_name` in the example with your `README.md` file
- Type `git add README.md` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 130. Git status

### 130.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 140. Touch reference file

### 140.1

Now your file is in staging and will be added with the next commit. You aren't quite ready to commit this yet though. Use `touch` again to create `sql_reference.json` in your repo.

#### HINTS

- Use `touch file_name` to create a file
- Type `touch sql_reference.json` into the terminal and press enter
- Don't try to create the file with another method
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 150. Git status

### 150.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 160. Git add `sql_reference.json`

### 160.1

You now have one file in staging and one that is untracked. Add the new file you created to the staging area. 

#### HINTS

- Here's the example again: `git add file_name`
- You added the last one with `git add README.md`
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 170. Git status

### 170.1

Check your status again please.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 180. Git Commit

### 180.1

Now you have two files in staging. To commit them, you can use `git commit -m "Initial commit"`. The `-m` stands for "message". Often times, the first commit of a repo will have the message "Initial commit". Commit your two files with the message `Initial commit`.

#### HINTS

- Type `git commit -m "initial commit"` in the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 190. Git Status

### 190.1

When you make a commit, whatever is in the staging area will be added to your git history. Check your status to see what's there.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 200. Git Log

### 200.1

Your "working tree" is clean. That means the files were committed, and there's no other new changes that git recognizes. You can see your commit history with `git log`. Check your commit history.

#### HINTS

- Type `git log` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 210. Add CREATE DATABASE

### 210.1

You can see the commit you made. It shows the message you gave with the commit, along with your username, email, the date, and a commit hash. The hash is that long string of characters. Open up your `.json` file and add this object to it:

```json
{
  "database": {
    "create": "CREATE DATABASE database_name;"
  }
}
```

#### HINTS

- Add the suggested object to your `sql_reference.json` file

## 220. Git status

### 220.1

Check your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 230. Git diff

### 230.1

Git recognizes new unstaged changes to your file. Notice that it doesn't say that it's untracked anymore because the file has been previously committed. You can see the changes you made with `git diff`. Take a look at the new changes.

#### HINTS

- Type `git diff` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 240. Git Add Reference File

### 240.1

Add your new changes to staging with the `git add` command again. Make sure to put the filename you want to at the end of the command.

#### HINTS

- You previously used `git add README.md` to add changes to staging
- Type `git add sql_referenece.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 250. Git status

### 250.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 260. Commit CREATE DATABASE

### 260.1

Your new changes are ready to be committed. Commit them with the message `feat: add create database reference`. As a reminder, here what a commit looks like: `git commit -m "message"`.

#### HINTS

- Type `git commit -m "feat: add create database reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 270. Git Log

### 270.1

Commit messages often start with `fix:` or `feat:` among others to help people understand what your commit is doing. Check your `git log` again to see the new commit added.

#### HINTS

- Type `git log` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 280. Add DROP DATABASE reference

### 280.1

Now there's two commits in your history, the newest one is at the top :smile: Add `"drop": "DROP DATABASE database_name;"` to the `database` object in your `sql_reference.json` file. Don't forget the comma at the end of the previous line to make it a valid json object.

#### HINTS

- Your database object should look like this:
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

## 290. Git Status

### 290.1

Check the status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 300. Git Diff

### 300.1

Changes not staged, I should have expected that. Check the `diff` quick.

#### HINTS

- Use the "git diff" command in your repo
- Type `git diff` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 310. add DROP DATABASE

### 310.1

Looks like you changed a couple lines. Add your changes to the staging area.

#### HINTS

- You previously used `git add README.md` to add changes to staging
- Type `git add sql_reference.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 320. commit DROP DATABASE

### 320.1

Commit your staged changes with the message, `feat: add drop database reference`

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add drop database reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 330. Git Log

### 330.1

I think you're catching on :smile: Check the `log` again.

#### HINTS

- Type `git log` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 340. Git Branch

### 340.1

You have been making changes to your `main` branch. You actually want to try and avoid that. Type `git branch` to see the current branches in your repo.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 350. Git Branch CREATE TABLE

### 350.1

You only have the `main` branch still. You can create a branch with `git branch branch_name`. Branches often start with `fix/` or `feat/` among others like commit messages, but they use a forward slash and can't contain spaces. Create a new branch named `feat/add-create-table-reference`.

#### HINTS

- Type `git branch feat/add-create-table-reference` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 360. Git Branch

### 360.1

Your new branch is basically a fork of the `main` branch since that's the branch you were on when you created it. It will have the same code and commit history as `main` did at the time of the branch creation. View your branches again with `git branch`.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 370. Checkout CREATE TABLE

### 370.1

You created the branch, but you are still on the `main` branch as denoted with the `*`. To switch to a branch use: `git checkout branch_name`. Switch to your new branch.

#### HINTS

- Type `git checkout feat/add-create-table-reference` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 380. Git Branch

### 380.1

It says you switched to your new branch. Type `git branch` so I can make sure the `*` switched.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 390. Add CREATE TABLE Reference

### 390.1

Like I said, you don't want to make commits directly to the `main` branch of a repo. So this branch will be for some new changes. What you will do is make the changes and commits here, then merge them into the `main` branch when they are ready. Add a reference for creating an SQL table to your json file along side your `database` property. Make it look like this:

```json
"table": {
  "create": "CREATE TABLE table_name();",
}
```

#### HINTS

- Make sure to add commas to keep it a valid json object
- The whole file should look like this:
  ```json
  {
    "database": {
      "create": "CREATE DATABASE database_name;",
      "drop": "DROP DATABASE database_name;",
    },
    "table": {
      "create": "CREATE TABLE table_name();"
    }
  }
  ```

## 400. Git Status

### 400.1

Check the status again. You might as well get used to it :smiley_cat:

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 410. Add CREATE TABLE

### 410.1

Add the file to staging.

#### HINTS

- Here's an example: `git add file_name`
- You previously used `git add README.md` to add changes to staging
- Type `git add sql_referenece.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 420. Commit CREATE TABLE

### 420.1

The changes are now in staging. Commit your staged changes with the message `feat: add create table reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add create table reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 430. Git log

### 430.1

Check your `git log` again.

#### HINTS

- Type `git log` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 440. git checkout main

### 440.1

Now you have four commits. Use `git checkout` to switch back to the `main` branch.

#### HINTS

- Use `git checkout branch_name` to switch to a branch
- Enter `git checkout main` into the terminal and press enter

## 450. Git Log

### 450.1

You may have noticed that the code you added disappeared from the json file. Your changes were added on the `feat/add-create-table-reference` branch so they don't exist on this branch. Check the log of the main branch.

#### HINTS

- Type `git log` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 460. Git Branch

### 460.1

The commit you added is not on this branch so it simply doesn't exist as far as this branch is concerned. If you switch back to the other branch, everything would show back up. View the branches you have to remind me the name of your other branch.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 470. Git Merge

### 470.1

You created the `feat/add-create-table-reference` branch, made some commits, and now it's ready to be added to the `main` branch. You can use `git merge branch_name` to bring changes from a branch into the branch you are currently on. Merge the changes from your feature branch into the `main` branch.

#### HINTS

- Type `git merge feat/add-create-table-reference` into the terminal and press enter
- Make sure you enter the command while on the `main` branch

## 480. Git Log

### 480.1

Your additions magically appeared in the json file. Check the log again.

#### HINTS

- Type `git merge feat/add-create-table-reference` into the terminal and press enter
- Make sure you enter the command while on the `main` branch

## 490. Git Branch -d

### 490.1

The commits you made on your feature branch were added to this branch. You can delete a branch with `git branch -d branch_name`. `-d` stands for "delete". Since your changes were added, you can safely delete the `feat/add-create-table-reference` branch. Do that now.

#### HINTS

- Type `git branch -d feat/add-create-table-reference` into the terminal and press enter

## 500. Git Branch

### 500.1

View your branches again to verify that it's gone.

#### HINTS

- Type `git branch` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder
- Enter `cd ~/project/sql_reference` to go to the folder if you aren't there

## 510. Checkout DROP TABLE

### 510.1

You're just left with the `main` branch again... Want to try it again? Last time you created a branch and then switched to it. You can do both at the same time with `git checkout -b branch_name`. Create and switch to a new branch named `feat/add-drop-table-reference`.

#### HINTS

- Type `git checkout -b feat/add-drop-table-reference` into the terminal and press enter

## 520. Add DROP TABLE Reference

### 520.1

Add a reference in the `table` object of your json file for dropping a table. It should look like this: `"drop": "DROP TABLE table_name;"`

#### HINTS

- Don't forget the commas to make it a valid json object
- The `table` object should look like this:
  ```json
  "table": {
    "create": "CREATE TABLE table_name();",
    "drop": "DROP TABLE table_name;"
  }
  ```

## 530. Git Status

### 530.1

Check your status.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 540. Add DROP TABLE

### 540.1

Add your changes to staging.

#### HINTS

- You previously used `git add README.md` to add changes to staging
- Type `git add sql_referenece.json` into the terminal and press enter
- Make sure you are in your `sql_reference` repo folder

## 550. Commit DROP TABLE

### 550.1

Commit your staged changes with the message `feat: add drop table reference`.

#### HINTS

- Commit changes with `git commit -m "message"`
- Type `git commit -m "feat: add drop table reference"` into the terminal and press enter
- View your `git log` to see if your message is correct
- If the message is wrong, enter `git reset HEAD~1`, then `git add .`, and then you can try to make the commit again
- Make sure you are in your `sql_reference` repo folder

## 560. Checkout main

### 560.1

Switch back your `main` branch.

#### HINTS

- Use `git checkout branch_name` to switch to a branch
- Enter `git checkout main` into the terminal and press enter

## 570. git branch

### 570.1

Remember that the code and commits you added aren't on this branch. View the branches on your repo so you can get the name of it to merge your feature into the main branch.

#### HINTS

- Use `git branch` to view your branches
- Make sure you are in your `sql_reference` repo folder

## 580. Merge DROP TABLE

### 580.1

Merge your feature branch into the `main` branch.

#### HINTS

- Here's an example: `git merge branch_name`
- The command will merge `branch_name` into whatever branch you are on
- Type `git merge feat/add-drop-table-reference` into the terminal and press enter
- Make sure you enter the command while on the `main` branch

## 590. Delete DROP TABLE

### 590.1

Your code and commits from your new feature are now added to this branch. Delete your feature branch.

#### HINTS

- Here's an example: `git branch -d branch_name`
- Type `git branch -d feat/add-create-table-reference` into the terminal and press enter
