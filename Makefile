#
# Makefile
#

.PHONY: build test

build:
	./node_modules/gulp/bin/gulp.js js

test:
	./node_modules/jest-cli/bin/jest.js

