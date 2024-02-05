CREATE TABLE materials (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Table for parts information
CREATE TABLE parts (
    id VARCHAR(255) PRIMARY KEY,
    material_id VARCHAR(255) REFERENCES materials(id),
    name VARCHAR(255) NOT NULL
);