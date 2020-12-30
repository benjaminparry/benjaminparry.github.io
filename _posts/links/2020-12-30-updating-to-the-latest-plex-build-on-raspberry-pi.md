---
type: post
title: "Updating to the latest Plex build on a Raspberry Pi"
date: 2020-12-30
categories: links
tags: [raspberry-pi, plex]
posse: "I finally found a way to upgrade to the latest Plex build on a Raspberry Pi."
published: true
author: mbourgon
link: https://pimylifeup.com/raspberry-pi-plex-server/#comment-27573
notes: true
---

I run my own media server using Plex on a Raspberry Pi 4. It performs really well and has the added benefit of low energy usage thanks to the Pi.

I’ve been struggling to upgrade to the latest build using the usual `sudo apt update` and `sudo apt upgrade` commands. Since some of the features on the Android app won’t work without the latest build I decided to find an answer.

In the comments of a tutorial blog post someone had [found a solution](https://pimylifeup.com/raspberry-pi-plex-server/#comment-27573).

* On the Raspberry Pi, nagigate to `/etc/apt/sources.list.d/`
* Type `sudo nano plexmediaserver.list`
* Remove the `#` from the line of code `#deb https://downloads.plex.tv/repo/deb/ public main`
* Press cmd+x to exit the file
* Type `y` to accept changes
* Press enter to save

Then upgrade as you would normally do.

* Type `sudo apt update`
* Type `sudo apt upgrade`
* Type `y` to confirm the upgrade
* Once it’s completed type `sudo shutdown -r now`

After a few minutes reload your Plex client, you should be on the latest build.
