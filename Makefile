build/dev:
	sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml build
	
dev:
	sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

down:
	sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
