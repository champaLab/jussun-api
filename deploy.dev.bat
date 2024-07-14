@echo off

set /p VERSION= Enter image version:

if defined VERSION GOTO :version_arg_exists

set VERSION=latest

:version_arg_exists

echo %VERSION%

echo "(1/3) Preparing to setup image registry.........."

set IMAGE=registry.laogw.la/evisa/qr-link-node

echo "(2/3) Building java package......."

echo %IMAGE%

echo "(3/3) Building image: " %IMAGE%:%VERSION%

cmd /c docker build --platform linux/amd64  -f Dockerfile.dev -t %IMAGE%:%VERSION% .
cmd /c docker push %IMAGE%:%VERSION%