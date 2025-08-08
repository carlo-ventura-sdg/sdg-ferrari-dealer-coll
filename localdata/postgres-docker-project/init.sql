-- -- Create the table
-- CREATE TABLE ferrari_dso (
--     DSO VARCHAR(20) PRIMARY KEY,
--     VIN VARCHAR(20),
--     Project VARCHAR(10),
--     Customer VARCHAR(20),
--     Status_ID VARCHAR(5),
--     DSO_Status VARCHAR(20),
--     DSO_Type CHAR(1),
--     Tailor_Made_Flag CHAR(1),
--     Dealer VARCHAR(20),
--     Ente_Interno CHAR(1),
--     Market VARCHAR(10),
--     Region VARCHAR(5),
--     HUB VARCHAR(5),
--     Vettura VARCHAR(20),
--     Model VARCHAR(10),
--     Version VARCHAR(5)
-- );

-- -- Copy data from CSV file
-- COPY ferrari_dso(DSO, VIN, Project, Customer, Status_ID, DSO_Status, DSO_Type, 
--     Tailor_Made_Flag, Dealer, Ente_Interno, Market, Region, HUB, Vettura, Model, Version)
-- FROM '/docker-entrypoint-initdb.d/anagrafica.csv'
-- DELIMITER ','
-- CSV HEADER;

-- -- Create indexes for common query fields
-- CREATE INDEX idx_market ON ferrari_dso(Market);
-- CREATE INDEX idx_model ON ferrari_dso(Model);
-- CREATE INDEX idx_dealer ON ferrari_dso(Dealer);

-- Create the table
CREATE TABLE ferrari_dso (
    dso VARCHAR(20) PRIMARY KEY,
    project VARCHAR(10),
    customer_code VARCHAR(20),
    customer_desc VARCHAR(100),
    status_id VARCHAR(5),
    tailor_made_flag CHAR(1),
    flag_order_call CHAR(10),
    day_w_code VARCHAR(20),
    day_w_desc VARCHAR(20),
    dealer_code VARCHAR(20),
    dealer_desc VARCHAR(50),
    ente_interno VARCHAR(20),
    market_code VARCHAR(20),
    market_desc VARCHAR(20),
    region_code VARCHAR(20),
    region_desc VARCHAR(20),
    hub VARCHAR(5),
    vettura VARCHAR(20),
    model_code VARCHAR(10),
    model_desc VARCHAR(20),
    version_code VARCHAR(5),
    version_desc VARCHAR(20)
    
);

-- Copy data from CSV file
COPY ferrari_dso(dso, project, customer_code, customer_desc, status_id, tailor_made_flag, flag_order_call, day_w_code,
day_w_desc, dealer_code, dealer_desc, ente_interno, market_code, market_desc, region_code, region_desc, hub, vettura,
model_code, model_desc, version_code, version_desc)
FROM '/docker-entrypoint-initdb.d/anagrafica.csv'
DELIMITER ','
CSV HEADER;



-- Create the table
CREATE TABLE ferrari_month_dso (
    DSO VARCHAR(20) PRIMARY KEY,
    rank VARCHAR(20),
    month VARCHAR(20)
);

-- Copy data from CSV file
COPY ferrari_month_dso(DSO, rank, month)
FROM '/docker-entrypoint-initdb.d/allocation-month.csv'
DELIMITER ','
CSV HEADER;
