# VERSION = v1.0.1

# # Test End-to-End with
# test:
# 	docker compose -f docker-compose.yml down
# 	docker compose -f docker-compose.yml up --build --force-recreate --abort-on-container-exit --exit-code-from_tester

# # Test End-to-End Locally
# test-local:
# 	docker compose down
# 	docker compose up --build --force-recreate --abort-on-container-exit --exit-code-from_tester

# # Bring Down Services
# test-down:
# 	docker compose -f docker-compose.yml down

# Stop and Remove Containers
compose-down:
	docker compose down

# Stop Containers and Bring Them Up Again
compose-up:
	docker compose down
	docker compose up -d

# Restart Containers with Cleanup and Port Check
restart-containers:
	@echo "Stopping and removing existing containers..."
	docker compose down --remove-orphans || exit 1

	@echo "Checking if port 1144 is in use..."
	if sudo lsof -i :1144; then \
	  echo "Port 1144 is in use. Please check for conflicts.";\
	else \
	  echo "Port 1144 is not in use.";\
	fi

	@echo "Rebuilding and starting containers..."
	docker compose up -d --build || exit 1

	@echo "Containers have been restarted."
