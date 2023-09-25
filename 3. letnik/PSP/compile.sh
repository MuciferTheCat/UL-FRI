#!/bin/bash

docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/latex PSP-izpiti.md -o PSP-izpiti.pdf
