#!/bin/bash

NAME=api

# stop container if currently running
echo -ne "stopping... "
docker container stop $NAME >/dev/null 2>&1
STOP_OK=$?

if [ $STOP_OK -eq 0 ]; then
    echo OK
else
    # OK if code 1 (not running)
    if [ $STOP_OK -eq 1 ]; then echo OK; else echo NOT OK - $STOP_OK; fi
fi

# build and run (if build successful)
echo -ne "building... "
docker build -t $NAME . >/dev/null # don't 2>&1
BUILD_OK=$?

if [ $BUILD_OK -eq 0 ]; then

    echo -ne "OK\nstarting... "
    docker run -d -p 80:80 -it --rm --name $NAME $NAME >/dev/null # don't 2>&1
    if [ $? -eq 0 ]; then echo OK; fi

else
    echo NOT OK
    echo build exited with code $BUILD_OK
fi

