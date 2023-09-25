#!/bin/bash

docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/latex BMO.md -o BMO.pdf
