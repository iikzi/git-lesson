#!/bin/bash

select choice in one two "three four"
do
    if [[ "$choice" = 'two' ]]; then
	echo done
	exit
    else
	echo $REPLY: $choice
    fi
done
