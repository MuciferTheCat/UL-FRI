#!/bin/bash

docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/latex RGTI-teorija.md -o RGTI-teorija.pdf
