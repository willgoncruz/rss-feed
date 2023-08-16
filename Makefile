### Makefile to run commands

## Run development server
run-server:
	cd src/backend && npm run dev

run-back:
	cd src/golang && PORT=4000 go run main.go

## Run frontend app
run-front:
	cd src/frontend && npm run dev

## Checks front code for lint errors
lint:
	cd src/frontend && npm run lint

## Generate typescript types from graphql schema
## cd src/backend && npm run generate
generate:
	cd src/golang && go run github.com/99designs/gqlgen generate
