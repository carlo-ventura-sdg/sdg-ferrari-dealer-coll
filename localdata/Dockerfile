FROM postgres:15

# Set environment variables
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=ferrari

# Create a directory for custom initialization scripts
RUN mkdir -p /docker-entrypoint-initdb.d

# Copy CSV file and init script into the container
COPY ./postgres-docker-project/anagrafica.csv /docker-entrypoint-initdb.d/
COPY ./postgres-docker-project/allocation-month.csv /docker-entrypoint-initdb.d/
COPY ./postgres-docker-project/init.sql /docker-entrypoint-initdb.d/

# Set proper permissions
RUN chmod 0755 /docker-entrypoint-initdb.d/*

EXPOSE 5432