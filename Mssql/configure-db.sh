#!/bin/bash

sleep 50s
echo "Configurando a database"
/opt/mssql-tools18/bin/sqlcmd -C -S localhost -U sa -P "$MSSQL_SA_PASSWORD" -d master -i /usr/config/setup.sql
