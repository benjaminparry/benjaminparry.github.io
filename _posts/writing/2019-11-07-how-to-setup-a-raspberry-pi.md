---
title: How to setup a Raspberry Pi
posse: A step-by-step guide for setting up your Raspberry Pi.
category: writing
tags: [raspberry-pi]
published: true
---

Back in 2015 the Raspberry Pi magazine MagPi was giving away a free Pi Zero in issue 40 and the public went wild for it. I too got caught up in the hysteria and after failing to track down a copy, and the sought after free giveaway, I snapped one up on the internet.

When it finally arrived I had no idea where to begin. Since then I’ve got to grips with the basics and have 2 more Pi’s to add to the collection. I’ve been experimenting with different projects and my confidence and knowledge is slowly growing.

With experimentation comes failure, leading down dead-ends to head scratching confusion. Countless times I’ve had to reinstall the OS, update and configure the Pi piecing together the commands and steps from blog posts and installation guides.

In an attempt to have a single reference point I am writing this guide for myself. It may well be of use to you too.

Let’s begin.

1. Flash the SD card using an app like [Etcher](https://www.balena.io/etcher/)
2. Drag the SD volume into an IDE
3. Create an empty file and save it with the name `SSH`
4. Eject the SD card
5. Insert the SD card into the Raspberry Pi, connect the ethernet cable and power cable
6. Use an app like [Fing](https://www.fing.com/products/fing-app) to look find the IP address of your Raspberry Pi
7. Open Terminal and enter `ssh pi@{Raspberry Pi IP address}`
8. Type `yes` to confirm connection
9. Type the default password `raspberry`
10. Update the Raspberry Pi with the newest packages by typing `sudo apt update`
11. Upgrade the packages by typing `sudo apt full-upgrade`
12. Type `y` to confirm the upgrade
13. _Go make yourself a cup of tea…_
14. Clean everything up by typing `sudo apt clean`
15. Reboot by typing `sudo shutdown -r now`
16. Connect again via SSH again `ssh pi@{IP address}`
17. Type the default password `raspberry`
18. Start the Raspberry Pi configuration by typing `sudo raspi-config`
19. Select **Change user password** and press enter
20. Press enter again to confirm
21. Enter a new password
21. Re-enter the new password to confirm and press enter
20. Press enter again to confirm
21. Press Esc to exit the config menu

Your Pi is now setup, updated and ready to start your project.
