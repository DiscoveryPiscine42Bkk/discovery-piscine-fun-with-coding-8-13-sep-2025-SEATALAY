#!/bin/bash

# ถ้าไม่มี arguments
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# แสดง arguments ไม่เกิน 3 ตัว
count=0
for arg in "$@"
do
    if [ $count -lt 3 ]; then
        echo "$arg"
    fi
    count=$((count+1))
done

