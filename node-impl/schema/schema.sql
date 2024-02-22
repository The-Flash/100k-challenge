CREATE TABLE materials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Table for parts information
CREATE TABLE parts (
    material_id int REFERENCES materials(id),
    name VARCHAR(255) NOT NULL
);