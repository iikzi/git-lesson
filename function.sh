#!/bin/bash

function quit {
    echo exit
}

function hello {
    echo Hello!
}
hello
quit
echo foo

function e {
    echo $1
}
e Hello
e
