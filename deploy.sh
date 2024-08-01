#!/bin/bash

IMAGE=registry.laogw.la/evisa/evisa-checker-node

if [ -n "$1" ]; then VERSION=$1; else VERSION="latest";fi

echo "Building image $IMAGE:$VERSION"

docker build --platform=linux/amd64 -t $IMAGE:$VERSION .
docker push $IMAGE:$VERSION
