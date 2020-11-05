# Introduction

> Welcome to the git lessons!

## 10. Restart Terminal

### 10.1

The first thing you need to do is start the terminal. Open a new one by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello git` into the terminal and press enter.

#### HINTS

- Follow the directions closely
- If the tests don't pass, redo those instructions

## 20. Make Directory

### 20.1

You should be in the `project` folder in the terminal you opened. Use the terminal to make a new directory named `website` in the `project` folder. As a reminder, you can use the `mkdir` command to make a new folder.

#### HINTS

- Enter `mkdir website` in the terminal from the `project` folder
- Enter `cd ~/project` to get to the `project` folder if you aren't there
- Don't try to create the folder with another method

## 30. Change Directory

### 30.1

Use the "change directory" command in the terminal to change to your new folder.

#### HINTS

- Enter `cd website` into the terminal
- Make sure you are in the `project` folder first
- Enter `cd ~/project` to get to the `project` folder if you aren't there

## 40. Initialize a git Repository

### 40.1

This folder will be your git repository. To turn it into one, type `git init` into the terminal from this folder.

#### HINTS

- Enter `git init` into the terminal while in the `git-practice` folder
- Make sure you are in the `git-practice` folder first
- Enter `cd ~/project/git-practice` to get to the `git-practice` folder if you aren't there

## 50. Git Status

### 50.1

You can use `git status` to see the status of where you are with your repository. This command is your best friend.

#### HINTS

- Type `git status` into the terminal and press enter
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there

## 60. Create index.html

### 60.1

You are on the "master" branch with nothing to commit. Let's make something to commit! Create `index.html` in your website folder.

#### HINTS

- You can create the file from the command line with `touch index.html` while in the `website` folder
- Enter `cd ~/project/website` to get to the `website` folder

## 70. Git Status

### 70.1

Check your status again with `git status`

#### HINTS

- Type `git status` into the terminal and press enter
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there

## 80. Add index.html

### 80.1

It shows the file you created as "untracked" because it didn't exist in the last commit. It takes two steps to commit it. The first step is to "add" it. Use `git add index.html` to add the file.

#### HINTS

- Type `git add index.html` into the terminal and press enter
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there

## 90. Git Status

### 90.1

Check the status again.

#### HINTS

- Use the "git status" command
- Enter `git status` into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there

## 100. Your first commit

### 100.1

The file is now added and ready to be committed. Use `git commit -m "message"` to commit your changes. `-m` stands for message, and whatever you put in the quotes will be the message that goes with that commit. Commit your changes with the message, `my first commit`.

#### HINTS

- Enter `git commit -m "my first commit" into the terminal
- Make sure you are in the `website` folder first
- Enter `cd ~/project/website` to get to the `website` folder if you aren't there
