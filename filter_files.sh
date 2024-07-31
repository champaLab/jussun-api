#!/bin/bash
source_dir="/root/servers/actions-runner/JUTSUN-API/jutsun-node/jutsun-node"
dest_dir="/root"  # Create a temporary directory outside the project
exclude_dirs=("uploads")

mkdir -p "$dest_dir"

find "$source_dir" -type f \( ! -path "*${exclude_dirs[@]}*" \) -exec cp -r {} "$dest_dir" \;
