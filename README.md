# acme-service
Dockerised ACME service for nginx and mail server

## Getting Started

```sh
# replace mail.example.com with your mail server hostname
LE_HOSTNAME=mail.example.com npm run init:config
```

## Local HTTPS Setup

**Example**

```sh
HOST=elemental-sso.local
mkdir certs
mkcert -cert-file certs/$HOST.crt -key-file certs/$HOST.key $HOST
```

