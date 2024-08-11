#!/bin/bash

IMAGE=jutsun-node

if [ -n "$1" ]; then VERSION=$1; else VERSION="latest";fi

echo "Building image $IMAGE:$VERSION"

docker build --platform=linux/amd64 -f Dockerfile -t $IMAGE:$VERSION .
# docker push $IMAGE:$VERSION
