#!/bin/bash

docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/latex 1_domaca_naloga.md -o 1_domaca_naloga.pdf
