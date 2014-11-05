#
# Makefile
#

.PHONY: build test

build:
	./node_modules/gulp/bin/gulp.js js

test:
	./node_modules/jest-cli/bin/jest.js

test-watch:
	fswatch-run src/talk3/*.js src/talk3/__tests__/*.js ./node_modules/jest-cli/bin/jest.js
