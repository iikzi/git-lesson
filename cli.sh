#!/bin/bash

if [[ -z "$1" ]]; then
    echo usage: $0 directory
    exit
fi
SRCD=$1
TGTD="/media/rivers/My Passport/learn/git-lesson/"
OF=test-$(date +%Y%m%d).tar.gz
tar -czf "$TGTD$OF" $SRCD
