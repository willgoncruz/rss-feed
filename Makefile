### Makefile to run commands

## Run development server
run-server:
	cd backend && npm run dev

## Run frontend app
run-front:
	cd frontend && npm run dev

lint:
	cd frontend && npm run lint