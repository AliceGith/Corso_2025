CREATE TABLE libro(
	idlibro INT PRIMARY KEY AUTO_INCREMENT,
	titolo VARCHAR(50),
	prezzo DOUBLE,
	anno YEAR
);

INSERT INTO libro(titolo, prezzo, anno)
VALUES("Guida galattica per autostoppisti", 16.15, 1979);

INSERT INTO libro(titolo, prezzo)
VALUES("Il signore degli anelli", 14);

INSERT INTO libro(titolo, prezzo, anno)
VALUES("Il signore delle mosche", 22.30, 2025),
		("Lo Hobbit", 42.50, 1942),
		("1984", 5.99, 1949);

CREATE TABLE Y(a INT, b DATETIME, c VARCHAR(50));

INSERT INTO Y
VALUES(10, NOW(), "Ciao");

INSERT INTO Y
VALUES(20, SYSDATE(), "Ciao");

INSERT INTO Y
VALUES(30, "2025-04-28", "Ciao");

INSERT INTO Y
VALUES(40, "20250428", "Ciao");

INSERT INTO Y
VALUES(30, "2025/04/28", "Ciao");

INSERT INTO Y
VALUES(30, "2025-04/28", "Ciao");

ALTER TABLE libro MODIFY titolo VARCHAR(50) NOT NULL;

INSERT INTO libro(titolo, prezzo, anno)
VALUES("Beta", 0, 2025);

ALTER TABLE libro ADD CONSTRAINT titolo_uq UNIQUE(titolo);

CREATE TABLE editore(
	ideditore INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
);

ALTER TABLE libro ADD COLUMN ideditore INT;
ALTER TABLE libro ADD CONSTRAINT fk_libro_editore FOREIGN KEY(ideditore) REFERENCES editore(ideditore) ON DELETE CASCADE;

INSERT INTO editore(nome)
VALUES ("mondadori");

INSERT INTO editore(nome)
VALUES ("Feltrinelli"),
		 ("Rizzoli"),
		 ("Battello a vapore");
		 
INSERT INTO libro(titolo, prezzo, anno, ideditore)
VALUES ("Percy Jackson", 13, 2015, 1);

INSERT INTO libro(titolo, prezzo, anno, ideditore)
VALUES ("XXX", 13, 2015, 1),
		 ("YYY", 13, 2015, 1),
		 ("ZZZ", 13, 2015, 1);
		 
DELETE FROM editore WHERE ideditore=1;

INSERT INTO libro(titolo, prezzo, anno, ideditore)
VALUES ("xxx", 13, 2015, 1);

INSERT INTO dept(deptno, dname, city)
VALUES ("10", "sales", "milan"),
		 ("20", "hr", "turin"),
		 ("30", "management", "rome");

INSERT INTO emp(ename, job, hire_date, sal, deptno, sex, email)
VALUES ("Steven", "Account", "1987/06/17", 24000.00, 10, "M", "S@gmail.com"),
		 ("Jose Manuel", "Account", "1998/03/07", 7800.00, 10, "M", "J@gmail.com"),
		 ("Guyy", "Clerk", "1998/11/15", 2600.00, 30, "F", "G@gmail.com"),
		 ("Diana", "Prog", "1999/02/07", 4200.00, 20, "F", "D@gmail.com"),
		 ("Luis", "Account", "1999/12/07", 6900.00, 10, "M", "L@gmail.com"); 
		 
-- DELETE FROM emp;