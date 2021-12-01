#!/usr/bin/env bash

VERSION=$(date +%m%d%y)

docker build . -t searchjs:${VERSION} && \
	docker run --rm -i -t searchjs:${VERSION} npm start
