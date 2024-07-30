#!/bin/bash

docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/latex Latex_for_Markdown.md -o Latex_for_Markdown.pdf
