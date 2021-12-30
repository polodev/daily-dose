---
title: Daily Learning Oct 31, 2021
layout: post
topic:
  Linux timezone
tags:
  - Laravel
category:
  - Programming 
---

## `timedatectl`
To know about time and timezone in linux

## `timedatectl list-timezones`
To see list of timezone in linux. we can narrow output result using grep `timedatectl list-timezones | grep America`   

## `sudo timedatectl set-timezone America/Toronto`
To set up timezone 

Anyway I prefer UTC as timezone for server 

## Real-Time Clock / RTC in Linux
Two clocks are important in Linux: a ‘hardware clock’, also known as RTC, CMOS or BIOS clock. This is the battery-backed clock that keeps time even when the system is shut down. The second clock is called the ‘system clock/tick’ or 'kernel clock' and is maintained by the operating system. At boot time, the hardware clock is read and used to set the system clock. From that point onward the system clock is used to track time.

https://developer.toradex.com/knowledge-base/how-to-use-the-real-time-clock-in-linux      


## From: Abdelmonam Kouka. “Ubuntu Server Essentials”.
## Network settings 
* `ifup`
* `ifdown`
* `ifconfig`
* `route`
route As with ifconfig, this command can be used to both see and set network settings (network routes in this case)

sysstat package
“sudo apt-get install sysstat”
`free`
`top`
`vmstate` for detailed information 
`slabtop` -> slabtop command is useful in case you would like to show how much memory the kernel (the slab cache) of your server is consuming.

##### `top`
top command is used to watch the currently running processes.
By default, those processes are sorted by the CPU usage.
You can also use top to keep a tab on your memory usage in a screen-oriented way.
When top is running, just press `Shift+m`

#### `vmstat` & `iostat` from sysstat package

`vmstat` command that we previously talked about can produce basic statistics related to CPU usage, such as system activity, user activity, the I/O wait time, the idle time, and so on. If you want more detailed reports of CPU utilization, you can use the `iostat` command that comes with the sysstat package

#### dstat package      
“The `dstat` command has some advantages over other tools, such as the simplicity and clarity of information shown, and the use of colors. To install this tool, install the dstat      
`sudo apt-get install dstat`       

#### `du` and `df`
Commands such as `du` and `df` allow you get basic information about storage space available to your Ubuntu Server.

#### `lsof`     

Another useful command in terms of file system management is lsof. It allows you to find out what files and directories are actually open on your storage devices. One of the most common cases where you need to use this command is when you are trying to unmount a file system that keeps telling you that it is busy. In this case, you can evaluate which open file is preventing the unmounting, decide if you want to stop the process holding that file open, and perform the unmounting of the file system again.

#### `kill` `pkill` `killall` under `top`
Commands such as kill, pkill, and killall can be used to send signals to running processes.


#### crontab
To create a personal crontab file, you need to type the following command:
`crontab -e`

The `crontab -e` command opens the crontab file in case it exists, or it creates a new one using a text editor from your choice:

In a crontab file, each job is represented by a single line that determines when to run the job, followed by the command that needs to be run. For the times fields, they are in the following order: minute (m), hour (h), day of month (dom), month (mon), and day of the week (dow). You can use * in these fields (for any).”

To list the contents of your crontab file, you should run `crontab –l`, and to delete your crontab file, you should run `crontab -r`    

test


