---
title: Daily Learning Oct 30, 2021
layout: post
topic:
category:
  - linux 
  - ubuntu
  - server
---
### From: Abdelmonam Kouka. “Ubuntu Server Essentials”.

### RAID
“The RAID technology (an acronym for Redundant Array of Inexpensive Disks) refers to the techniques used to distribute data across multiple hard drives (creating a storage unit from several hard disks).
The unit thus created has an improved fault tolerance (high availability) or a greater performance (the capacity/write speed).
The distribution of data on several hard drives allows you to increase the safety and reliability of the associated services.

### Using LVM
LVM (Logical Volume Manager) allows the creation and the management of logical volume on Linux.
The use of logical volumes somehow replaces the disks' partitioning.
This is a much more flexible system as it allows you, for instance, to reduce the size of a file system to expand another one regardless of their location on disks.

### ls command    

The `ls` command lists files and directories under the path passed in the parameter (the actual . directory is the default choice).
Some options are very helpful. For example, with the `-a` option, we can list the cached items. With the `-l` option, we can get additional information such as the file size and permissions:

### pwd
“The `pwd` command gives the current path (working directory).

### history
The `history` command lists the last commands that you ran.

### chmod, chown, chgrp    
The `chmod` command allows you to change file permissions.
Use it carefully, especially when you use the `*` magic card instead of a filename coupled with the `-R` option that runs it recursively.
From the same family, we will find the `chown` and `chgrp` commands, which allow you to change the owner and group of a file respectively.

### top    
The `top` command gives you a list of the processes that are running on your Ubuntu Server; they are sorted by the CPU usage.
This list is updated in real time, and it is limited by the size of the screen.
If you want to see the whole list of the processes that are running on the system, you can run the famous `ps -ef | less` command.
Here, we pipe the result of this command by using the `|` character as an input to the less command to see the result output page by page, less works like the famous more command.
Besides, it allows you to surf forward and backward.

### pipe `|`    
Note that piping (using the `|` character) is a mechanism used to optimize commands output by passing the output of the first command (the command before the | character) as an input to the second command (the command after the `|` character).
the second command (the command after the `|`` character). We can use a cascade of pipes using the `|`` character in a single command line.

### shortcut     
* `Ctrl+C`, which is used to quit a command that is not responding (or is simply taking too long to complete).
* `Ctrl+D`, which is used to send the end of file (EOF) signal to a command
* `Ctrl+Z`, which is used to stop the command that is running in the foreground (on the console). Even though it does stop the command, it does not terminate i”

### commands     
* `man` - manual
* `bg` - background
* `fg` - foreground
* `jobs` - current running jobs

### file management command     
* `mkdir` - for directory creation
* `cd` - to enter to a directory
* `touch` - to create a file    
* `cat` - to view its contents
* `cp` - to copy
* `rm` - to remove
* `mv` - to move/rename

### Repositories & PPA
There are four official repositories provided by Canonical (the company that created Ubuntu):”
1. main 2. restricted 3. universe 4. multiverse    

Personal Package Archives (PPA) which is a repository software for Ubuntu (visit https://launchpad.net/ubuntu/+ppas for more information).
The managing of repositories on your Ubuntu Server is done in the /etc/apt/sources.list file. ”

### apt
apt (Advanced Packaging Tool)

## Networking 
Network configuration file ` /etc/network/interfaces `      

Restarting after changing networking file `sudo /etc/init.d/networking restart`      

Another important network configuration file is /etc/resolv.conf, which contains the DNS list used by your server     










