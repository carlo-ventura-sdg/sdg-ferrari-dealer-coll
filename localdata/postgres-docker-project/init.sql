-- Create the table
CREATE TABLE ferrari_dso (
    DSO VARCHAR(20) PRIMARY KEY,
    VIN VARCHAR(20),
    Project VARCHAR(10),
    Customer VARCHAR(20),
    Status_ID VARCHAR(5),
    DSO_Status VARCHAR(20),
    DSO_Type CHAR(1),
    Tailor_Made_Flag CHAR(1),
    Dealer VARCHAR(20),
    Ente_Interno CHAR(1),
    Market VARCHAR(10),
    Region VARCHAR(5),
    HUB VARCHAR(5),
    Vettura VARCHAR(20),
    Model VARCHAR(10),
    Version VARCHAR(5)
);

-- Copy data from CSV file
COPY ferrari_dso(DSO, VIN, Project, Customer, Status_ID, DSO_Status, DSO_Type, 
    Tailor_Made_Flag, Dealer, Ente_Interno, Market, Region, HUB, Vettura, Model, Version)
FROM '/docker-entrypoint-initdb.d/anagrafica_dso.csv'
DELIMITER ','
CSV HEADER;

-- Create indexes for common query fields
CREATE INDEX idx_market ON ferrari_dso(Market);
CREATE INDEX idx_model ON ferrari_dso(Model);
CREATE INDEX idx_dealer ON ferrari_dso(Dealer);