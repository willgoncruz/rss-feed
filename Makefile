### Makefile to run commands

# Run backend server
run-back:
	docker-compose --file src/backend/docker-compose.yml up --build

## Run frontend app
run-front:
	cd src/frontend && npm run dev

## Checks front code for lint errors
lint:
	cd src/frontend && npm run lint

## Generate typescript types from graphql schema
## cd src/backend && npm run generate
generate:
	cd src/backend && go run github.com/99designs/gqlgen generate
