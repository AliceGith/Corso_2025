-- count -> contare le righe
-- max -> massimo
-- min -> minimo
-- AVG -> media
-- sum -> somma le righe

SELECT COUNT(*)
FROM emp;

SELECT COUNT(mgr), COUNT(job), COUNT(*)
FROM emp;

SELECT COUNT(*),
		 MAX(sal),
		 MIN(sal),
		 SUM(sal),
		 AVG(sal)
FROM emp;

SELECT deptno FROM emp GROUP BY deptno;

SELECT deptno, COUNT(*)
FROM emp
GROUP BY deptno;

SELECT job, COUNT(*)
FROM emp
GROUP BY emp.JOB
ORDER BY job;

SELECT deptno, job, COUNT(*)
FROM emp
GROUP BY deptno, job;

SELECT deptno, AVG(sal)
FROM emp
GROUP BY deptno
HAVING AVG(sal)>8000; -- la having filtra sui gruppi

SELECT deptno, AVG(sal)
FROM emp
WHERE job IN("prog","clerk")
GROUP BY deptno
HAVING AVG(sal)>7000

SELECT deptno, MAX(sal)
FROM emp
GROUP BY deptno
HAVING MAX(sal)>20000

SELECT *
FROM emp
ORDER BY ename

SELECT ename, COUNT(*)
FROM emp
GROUP BY ename
HAVING COUNT(*)>1;

SELECT *
FROM products
ORDER BY vend_id;

SELECT vend_id, COUNT(*)
FROM products
GROUP BY vend_id;

SELECT emp.JOB, SUM(sal), AVG(sal), MAX(sal), MIN(sal)
FROM emp
GROUP BY JOB
HAVING AVG(sal)>7000;

SELECT COUNT(*), job
FROM emp
GROUP BY job
HAVING AVG(sal)>10000;

SELECT vend_id, COUNT(*)
FROM products
WHERE prod_price>=4
GROUP BY vend_id
HAVING COUNT(*)>=2;