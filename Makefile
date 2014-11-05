#
# Makefile
#

.PHONY: build test

build:
	./node_modules/gulp/bin/gulp.js js

test:
	./node_modules/jest-cli/bin/jest.js

test-watch:
	fswatch-run -l 0.2  src/talk3/*.js src/talk3/__tests__/*.js ./node_modules/jest-cli/bin/jest.js
