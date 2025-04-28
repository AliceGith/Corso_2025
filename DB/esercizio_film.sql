CREATE TABLE film(
	idfilm INT,
	anno DATE,
	titolo VARCHAR(50),
	idproduttore INT,
	idregista INT
);

CREATE TABLE produttore(
	idproduttore INT,
	nome VARCHAR(30)
);

CREATE TABLE regista(
	idregista INT,
	nome VARCHAR(30),
	cognome VARCHAR(30),
	anno DATE,
	luogo VARCHAR(30),
	nazione VARCHAR(30)
);

CREATE TABLE recita(
	idrecita INT,
	idfilm INT,
	idattore INT
);

CREATE TABLE attore(
	idattore INT,
	nome VARCHAR(30)
);

ALTER TABLE film ADD CONSTRAINT pk_idfilm PRIMARY KEY(idfilm);
ALTER TABLE film MODIFY COLUMN idfilm INT AUTO_INCREMENT;

ALTER TABLE produttore ADD CONSTRAINT pk_idproduttore PRIMARY KEY(idproduttore);
ALTER TABLE produttore MODIFY COLUMN idproduttore INT AUTO_INCREMENT;

ALTER TABLE regista ADD CONSTRAINT pk_idregista PRIMARY KEY(idregista);
ALTER TABLE regista MODIFY COLUMN idregista INT AUTO_INCREMENT;

ALTER TABLE recita ADD CONSTRAINT pk_idrecita PRIMARY KEY(idrecita);
ALTER TABLE recita MODIFY COLUMN idrecita INT AUTO_INCREMENT;

ALTER TABLE attore ADD CONSTRAINT pk_idattore PRIMARY KEY(idattore);
ALTER TABLE attore MODIFY COLUMN idattore INT AUTO_INCREMENT;

ALTER TABLE film MODIFY COLUMN idproduttore INT NOT NULL;
ALTER TABLE film MODIFY COLUMN idregista INT NOT NULL;
ALTER TABLE recita MODIFY COLUMN idfilm INT NOT NULL;
ALTER TABLE recita MODIFY COLUMN idattore INT NOT NULL;
/* questi sono sbagliati perchè mettendo i campi delle chiavi esterne come not null non si può creare una chiave esterna che al delete metta set null */

ALTER TABLE produttore ADD CONSTRAINT nome_uq UNIQUE(nome);
ALTER TABLE film ADD CONSTRAINT titolo_uq UNIQUE(titolo);

ALTER TABLE film ADD CONSTRAINT fk_idproduttore FOREIGN KEY(idproduttore) REFERENCES produttore(idproduttore) ON DELETE SET NULL;
ALTER TABLE film ADD CONSTRAINT fk_idregista FOREIGN KEY(idregista) REFERENCES regista(idregista) ON DELETE SET NULL;
ALTER TABLE recita ADD CONSTRAINT fk_idfilm FOREIGN KEY(idfilm) REFERENCES film(idfilm) ON DELETE SET NULL;
ALTER TABLE recita ADD CONSTRAINT fk_idattore FOREIGN KEY(idattore) REFERENCES attore(idattore) ON DELETE SET NULL;
