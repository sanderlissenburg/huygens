help: ## Show this help message.
	@echo 'usage: make [target] ...'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

install:
	docker-compose run --rm node yarn install

build:
	if [ ! -d ./build ]; then \
		mkdir build; \
	fi;
	cp ./README.md ./build/README.md
	cp ./package.json ./build/package.json
	docker-compose run --rm node yarn run build

publish: build
	npm publish ./build

test:
	docker-compose run --rm node yarn run test

.PHONY: test install build
