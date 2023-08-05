build.certs.local:
	cd ./packages/setup && node index.js

init:
	mkdir nginx-conf nginx-vhost html certs

init.config:
	echo \"LETSENCRYPT_STANDALONE_CERTS=('mail')\nLETSENCRYPT_mail_HOST=('$LE_HOSTNAME')\" > le_config

build:
	docker compose -f docker-compose.yml build

start.local:
	docker compose -f docker-compose.yml -f docker-compose.local.yml up -d

start.staging:
	docker compose -f docker-compose.yml -f docker-compose.staging.yml up -d

start.prod:
	docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

stop:
	docker compose -f docker-compose.yml down
