---
title:
posse:
category: writing
tags: [raspberry-pi, openmediavault]
published: false
type: post
---

https://pimylifeup.com/raspberry-pi-plex-server/


Enable https protocol

`sudo apt-get install apt-transport-https`

`curl https://downloads.plex.tv/plex-keys/PlexSign.key | sudo apt-key add -`
`echo deb https://downloads.plex.tv/repo/deb public main | sudo tee /etc/apt/sources.list.d/plexmediaserver.list`
`sudo apt-get install plexmediaserver`

sudo $(brew --prefix e2fsprogs)/sbin/mkfs.ext4 /dev/disk2
