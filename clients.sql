-- Database: clients

CREATE TABLE clients (
	id int NOT NULL AUTO_INCREMENT,
	nom varchar(75) NOT NULL,
	prenom varchar(75) NOT NULL,
	adresse varchar(75) NOT NULL,
	codepostal varchar(10) NOT NULL,
	courriel varchar(50) NOT NULL,
	PRIMARY KEY(id)
);