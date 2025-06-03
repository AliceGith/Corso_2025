SELECT *
FROM emp
WHERE sal>
			(SELECT sal
			FROM emp
			WHERE ename="Daniel");
			
SELECT *
FROM emp
WHERE job=			
			(SELECT job
			FROM emp
			WHERE ename="steven")
AND ename != "steven";

SELECT *
FROM products
WHERE products.vend_id=
							(SELECT vend_id
							FROM vendors
							WHERE vendors.vend_country="england");
							
SELECT *
FROM orders
WHERE orders.cust_id=
						(SELECT cust_id
						FROM customers
						WHERE customers.cust_email="sales@villagetoys.com");

SELECT *
FROM emp
WHERE mgr=						
			(SELECT empno
			FROM emp
			WHERE ename=
							(SELECT ename
							FROM emp
							WHERE ename = "neena"))
AND sal>6000
AND ename LIKE "N%"
AND job = "prog";

SELECT *
FROM emp
WHERE mgr=						
				(SELECT empno
				FROM emp
				WHERE ename = "neena")
AND sal>6000
AND ename LIKE "N%"
AND job = "prog";