#!/bin/bash
source_dir="/root/servers/actions-runner/JUTSUN-API/jutsun-node/jutsun-node"

# Option 1: Using /tmp/filtered_files
dest_dir="/tmp/filtered_files"
mkdir -p "$dest_dir"

# Option 2: Creating a unique temporary directory
# dest_dir=$(mktemp -d "/tmp/filtered_files_XXXXXX")

exclude_dirs=("uploads")

find "$source_dir" -type f \( ! -path "*${exclude_dirs[@]}*" \) -exec cp -r {} "$dest_dir" \;

# Option 2: Clean up the temporary directory (if using mktemp)
# rm -rf "$dest_dir"  # Uncomment this line if using Option 2
