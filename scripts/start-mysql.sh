#!/bin/bash

docker run \
--rm \
-d \
-e MYSQL_ROOT_PASSWORD=password \
-e MYSQL_USER=hyf \
-e MYSQL_PASSWORD=password \
-p 3306:3306 \
-v $PWD/dump.sql:/docker-entrypoint-initdb.d/dump.sql \
mysql:8.0.13 --default-authentication-plugin=mysql_native_password
