#!/bin/bash

docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/latex imeDatotekeIn.md -o imeDatotekeOut.pdf
