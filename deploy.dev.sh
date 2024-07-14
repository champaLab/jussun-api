#!/bin/bash

IMAGE=registry.laogw.la/evisa/qr-link-node

if [ -n "$1" ]; then VERSION=$1; else VERSION="latest";fi

echo "Building image $IMAGE:$VERSION"

docker build --platform=linux/amd64 -f Dockerfile.dev -t $IMAGE:$VERSION .
docker push $IMAGE:$VERSION
