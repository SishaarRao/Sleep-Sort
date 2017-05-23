#!/usr/bin/env bash

sort() {
    sleep "$1"
    echo "$1"
}
while [ -n "$1" ]
do
    sort "$1" &
    shift
done
wait
