#!/bin/bash

if [ 'a' == 'a' ]; then
    echo "yep"
else
    echo "nope"
fi

if [ 'foo' == 'foo' ]; then
    echo expression evaluated as true
fi

T1="foo"
T2="bar"
if [ "$T1" = "$T2" ]; then
    echo expression evaluated as true
else
    echo expression evaluated as false
fi

a='hoho'
b='no'
if [[ $a = $b ]]; then
    echo yep
else if [[ $a == 'hoho' ]]; then
	 echo "you're funny"
     else
	 echo nope
     fi
fi
