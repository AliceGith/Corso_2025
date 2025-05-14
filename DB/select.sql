SELECT * FROM emp;

SELECT ename, job FROM emp;

SELECT sal AS salario, deptno AS dipartimento FROM emp;

SELECT 1+1;

SELECT impiegati.ENAME FROM emp impiegati;

SELECT * FROM emp ORDER BY sal;

SELECT * FROM emp ORDER BY sal DESC;

SELECT DISTINCT job FROM emp;

SELECT ename, job FROM emp;

SELECT * FROM emp LIMIT 0,5; -- la partenzaz e quante righe visualizzare

SELECT * FROM emp LIMIT 5,10; -- La partenza parte dalla riga successiva

SELECT * FROM emp;

SELECT empno, sal FROM emp ORDER BY empno desc;

SELECT hire_date, job FROM emp LIMIT 0,5;

SELECT ename, sal FROM emp ORDER BY sal desc LIMIT 0,1;

SELECT * FROM emp WHERE mgr IS NULL;

SELECT * FROM emp WHERE sal > 9000 AND job = "prog" ORDER BY ename DESC, sal;

SELECT * FROM emp WHERE ename = "Alexander" ORDER BY sal;

SELECT * FROM employees ORDER BY job_id DESC, email;

SELECT CONCAT(first_name, " ", last_name) as nominativo FROM employees;

SELECT CONCAT("prodotto: ", prod_name) AS nomeProdotto,
		 CONCAT("costo: ", prod_price, "€") AS prezzo 
		 FROM products;
		 
SELECT * FROM products WHERE vend_id = "DLL01" AND prod_price > 4;

SELECT * FROM emp WHERE DEPTNO = 10 OR DEPTNO = 20;
SELECT * FROM emp WHERE deptno IN(10,20);

SELECT * FROM emp WHERE ename LIKE "S%"; -- % caratteri bonus. in questo caso cerco quelli che cominciano per s
SELECT * FROM emp WHERE ename LIKE "S%" AND sal > 3000;

SELECT * FROM emp WHERE ename LIKE "_s%"; -- _ è una lettera

SELECT * FROM emp WHERE DEPTNO NOT IN(10,30);

SELECT * FROM emp WHERE sal BETWEEN 7000 AND 17000;