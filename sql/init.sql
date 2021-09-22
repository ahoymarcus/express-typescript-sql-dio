-- uuid usa hash e previne mineração, pois é não sequencial
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE EXTENSION IF NOT EXISTS "pgcrypto";


CREATE TABLE IF NOT EXISTS application_user (
	uuid UUID DEFAULT uuid_generate_v4(),
	username VARCHAR NOT NULL,
	password VARCHAR NOT NULL,
	PRIMARY KEY (uuid)
);


INSERT INTO application_user (username, password) VALUES ('admin', crypt('admin', 'my_salt'));
INSERT INTO application_user (username, password) VALUES ('renan', crypt('admin', 'my_salt'));





