### Makefile to run commands

## Run development server
run-server:
	cd src/backend && npm run dev

## Run frontend app
run-front:
	cd src/frontend && npm run dev

lint:
	cd src/frontend && npm run lint