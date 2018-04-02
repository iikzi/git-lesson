#!/bin/bash

while read var1 var2
do
    echo $var2 $var1
done

COUNTER=0
while [[ $COUNTER -lt 10 ]]; do
    echo The counter is $COUNTER
    COUNTER+=1
done
