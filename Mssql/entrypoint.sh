#!/bin/bash

/opt/mssql/bin/sqlservr & SQL_PID=$! & /usr/config/configure-db.sh
wait $SQL_PID
