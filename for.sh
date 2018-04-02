#!/bin/bash

for ((i = 0; i < 5; i++)); do
    echo $i
done

path="/media/rivers/My Passport/learn/git-lesson"
for i in $( ls "$path" ); do
    echo item: $i
done

for i in $( seq 0 2 20 ); do
    echo $i
done

COUNTER=0
while [[ $COUNTER -lt 10 ]]; do
    echo The counter is $COUNTER
    let COUNTER=COUNTER+1
done
