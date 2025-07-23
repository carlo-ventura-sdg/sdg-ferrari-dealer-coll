# PostgreSQL Docker Project

This project sets up a local PostgreSQL database using Docker. It imports data from a CSV file located in the `localdata` folder.

## Project Structure

```
postgres-docker-project
├── localdata
│   ├── import.csv
│   └── init.sql
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Files Description

- **localdata/import.csv**: Contains the data that will be imported into the PostgreSQL database.
- **localdata/init.sql**: Contains SQL commands to create the necessary database schema and import data from `import.csv`.
- **Dockerfile**: Defines the instructions for building the Docker image for the PostgreSQL database.
- **docker-compose.yml**: Used to define and run multi-container Docker applications, specifying the PostgreSQL service and its configuration.

## Setup Instructions

1. Ensure you have Docker and Docker Compose installed on your machine.
2. Clone this repository or download the project files.
3. Navigate to the project directory in your terminal.
4. Run the following command to build and start the PostgreSQL container:

   ```
   docker-compose up
   ```

5. The PostgreSQL database will be set up, and data will be imported from the CSV file specified in `init.sql`.

## Usage

You can connect to the PostgreSQL database using any PostgreSQL client with the credentials specified in the `docker-compose.yml` file.