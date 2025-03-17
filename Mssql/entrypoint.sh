#!/bin/bash

# Start the script to create the DB and user
/opt/mssql/bin/sqlservr & SQL_PID=$! & /usr/config/configure-db.sh
wait $SQL_PID
