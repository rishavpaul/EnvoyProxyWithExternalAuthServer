### Envoy Proxy with External Auth Server Prototype

This is an example of an Envoy Proxy running with an external AuthZ service.

```
docker rm $(docker ps -a -q); docker rmi $(docker images -q); docker-compose up --build
```
