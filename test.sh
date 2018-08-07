#!/bin/bash
docker built -t api .
if [ $? -eq 0 ]; then
    docker run -it --rm --name api.chaoticweg.cc api
fi

