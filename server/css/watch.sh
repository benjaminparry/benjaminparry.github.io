#!/bin/sh

# Change all instances of ‘global’ to whatever you have named your
# project’s stylesheet, `cd` to the directory in which this file lives and
# simply run `sh watch.sh`.

# No minification
#sass --watch global.scss:global.css --style expanded

sass --watch global.scss:global.min.css --style compressed

exit 0