DROP TABLE prova;
CREATE TABLE esempio(a CHAR(20), b VARCHAR(30), c INT);
DROP TABLE esempio;
CREATE TABLE prova(x INT, y CHAR(10));
CREATE TABLE if NOT EXISTS prova(x INT, y CHAR(10));
DROP TABLE if EXISTS esempio;
CREATE TABLE if NOT EXISTS tentativo(nomi VARCHAR(12), cose VARCHAR(12), citta VARCHAR(12), numeri INT, cap INT);
DROP TABLE prova,tentativo;
CREATE TABLE copia_esempio LIKE esempio;