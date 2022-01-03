---
title: Git Essential Commands
topic:
  Git
tags:
category:
  - git
---

## To set up your bash profile //only first time in computer

~~~bash
git config --global user.name <username>
git config --global user.email <email>
~~~

## Git initialization    

~~~bash
git init
~~~

## Adding file and folder to git        

Adding a file to git     

~~~bash
git add <file name / folder name>
~~~

Adding all changed to git        

~~~bash
git add .
~~~


## To commit message
~~~bash
git commit -m "<Your Message>"
~~~

## To push to git
~~~bash
git push origin master
~~~

## To see the changes in git repo
~~~bash
git status
~~~

## To see the difference   
~~~bash
git diff
~~~

## To close the diff message
~~~bash
q
or 
:q
~~~

## To see the log ( file changes)
~~~bash
git log
~~~

## To add remote repo 

~~~bash
git remote add origin <repo url>
~~~

## How to change git remote url 

~~~bash
git remote set-url origin <new repository url>
~~~

## Amending git commit message

~~~bash
git commit --amend
~~~

## Git stash and git stash apply

To go back to a clean working directory we use `git stash`.
To revert back to current working directory we use `git stash apply`



