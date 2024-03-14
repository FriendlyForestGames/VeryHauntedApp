SHELL := /bin/bash
PROJECT_NAME?=very-haunted-server-side

USER_ID:=$(shell id -u $$USER)

# Git repos
REPO=git@github.com:actuallyconnor/very-haunted-server-side.git

# Run Docker compose (with CI overrides)
DOCKER_COMPOSE:=VH_EXPOSE_PORT=$(VH_EXPOSE_PORT) \
  COMPOSE_DOCKER_CLI_BUILD=1 \
  docker compose \
  -p $(PROJECT_NAME) \
  -f docker-compose.yml
#   -f docker-compose.dev.yml

# Bring up the development environment
.PHONY: dev-up
dev-up:
	@$(DOCKER_COMPOSE) up --remove-orphans

# Brings down the development environment
.PHONY: dev-down
dev-down:
	@$(DOCKER_COMPOSE) down

# Cleans the development environment, will remove docker volumes and erase permanent storage
.PHONY: dev-clean
dev-clean: dev-down
	@$(DOCKER_COMPOSE) rm -s -v --force
