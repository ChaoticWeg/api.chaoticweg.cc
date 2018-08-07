#!/bin/bash
docker build -t api .
if [ $? -eq 0 ]; then
    docker run -d -it --rm --name api api
fi

