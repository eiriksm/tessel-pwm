test-cov:
	./node_modules/istanbul/lib/cli.js cover -- ./node_modules/mocha/bin/_mocha -R spec

test:
	npm test

.PHONY: test-cov test
