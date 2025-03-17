#!/bin/bash

wait_for_sql_server() {
  echo "Aguardando o SQL Server iniciar..."
  while ! /opt/mssql-tools18/bin/sqlcmd -C -S localhost -U sa -P "$MSSQL_SA_PASSWORD" -Q "SELECT 1" > /dev/null 2>&1; do
    echo "SQL Server não está pronto ainda. Aguardando..."
    sleep 5
  done
  echo "SQL Server está pronto!"
}

wait_for_sql_server

echo "Configurando a database"
/opt/mssql-tools18/bin/sqlcmd -C -S localhost -U sa -P "$MSSQL_SA_PASSWORD" -d master -i /usr/config/setup.sql
