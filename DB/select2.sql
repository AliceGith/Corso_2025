SELECT ename AS nome, job AS lavoro FROM emp WHERE job="prog";

-- usare tabella.ctrl+space da i suggerimenti delle colonne della tabella selezionata

SELECT e.FIRST_NAME, e.SALARY AS sal FROM employees AS e;

SELECT * FROM emp ORDER BY sal DESC;

SELECT * FROM emp ORDER BY job, sal;

SELECT DISTINCT job FROM emp;

SELECT * FROM emp LIMIT 0,5;

SELECT * FROM emp LIMIT 5,10;

SELECT * FROM emp ORDER BY sal DESC LIMIT 0,1;

SELECT * FROM emp WHERE mgr IS NULL;

SELECT * FROM emp WHERE mgr IS NOT NULL;

SELECT CONCAT(e.FIRST_NAME, " ", e.LAST_NAME) AS nome FROM employees AS e;

SELECT * FROM emp WHERE ename LIKE "s%";

SELECT * FROM emp WHERE ename LIKE "__s%";

SELECT * FROM emp WHERE ename LIKE "%s%";

SELECT * FROM emp WHERE ename NOT LIKE "%s%";

SELECT * FROM emp WHERE deptno = 10 OR deptno = 20;
SELECT * FROM emp WHERE deptno IN(10,20);

SELECT * FROM emp WHERE sal BETWEEN 6000 AND 17000;

SELECT * FROM emp WHERE sal BETWEEN 6000 AND 17000 AND hire_date BETWEEN "1994-01-01" AND "1995-12-31";

-- lex e guadagna più di 10000
-- oppure chi si chiama david
SELECT * FROM emp WHERE ename LIKE "David" OR ename LIKE "Lex" AND sal >= 10000;

SELECT * FROM emp WHERE (ename = "Lex" OR ename = "David") AND sal >=10000;

SELECT * FROM emp WHERE (job = "prog" AND sal >= 6000 AND ename LIKE "n%" AND mgr = 101);

SELECT * FROM products WHERE vend_id = "BRS01" OR (prod_price < 4 AND prod_desc LIKE "%rabbit%");

SELECT * FROM customers WHERE cust_state = "AZ" OR (cust_city = "Columbus" AND cust_email IS NULL);

SELECT if(1<2, "si", "no");

SELECT sal, if(sal>9000, "alto", "basso") AS confronto FROM emp;

SELECT job, if(job="prog", "programmatore", job) AS lavoro FROM emp;

SELECT e.ENAME, e.JOB,if(e.deptno=10, "", sal) AS stipendio, if(e.deptno=10, "", hire_date) AS data_assunzione, e.DEPTNO FROM emp e;

SELECT o.ORDER_NUM, o.PROD_ID, o.QUANTITY, if(o.QUANTITY < 10, "ordine piccolo", "") AS ordine FROM orderitems o

SELECT prod_name, prod_desc, if(prod_desc LIKE "%rabbit%" AND prod_price < 5, "prodotto economico per bambini", "") AS check_colonna FROM products

SELECT ename, sal, job, 
		case job when "prog" then "programmatore"
					when "clerk" then "impiegato"
					when "account" then "contabile"
					ELSE "altro"
		END AS lavoro
FROM emp;

SELECT ename, sal, job,
	if(job="prog", "programmatore", 
		if(job = "clerk", "impiegato",
			if(job = "account", "contabile", "")))
AS lavoro FROM emp;

SELECT cust_name AS nome, cust_city AS citta, 
	case cust_state when "MI" then "Michigan"
						 when "OH" then "Ohio"
						 when "IN" then "Indiana"
						 when "AZ" then "Arizona"
						 when "IL" then "Illinois"
						 ELSE "altro"
	END AS stato
FROM customers