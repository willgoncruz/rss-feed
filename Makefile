### Makefile to run commands

## Run development server
run-server:
	cd src/backend && npm run dev

## Run frontend app
run-front:
	cd src/frontend && npm run dev

## Checks front code for lint errors 
lint:
	cd src/frontend && npm run lint

## Generate typescript types from graphql schema
generate:
	cd src/backend && npm run generate
