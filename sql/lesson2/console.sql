SHOW DATABASES;
# 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
SELECT * FROM bank.client WHERE CHAR_LENGTH(client.FirstName) >= 6;

# 2. +Вибрати львівські відділення банку.+
select * from bank.department where DepartmentCity = 'Lviv';

# 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
SELECT  * FROM bank.client WHERE Education = 'high' ORDER BY FirstName;

# 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
SELECT * FROM bank.client ORDER BY idClient DESC LIMIT 5;

# 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
SELECT  * FROM bank.client WHERE LastName LIKE '%ov';

# 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
SELECT * FROM bank.client WHERE Department_idDepartment = 1;

# 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.

# 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
SELECT * FROM bank.application LEFT JOIN bank.client ON idClient = idApplication WHERE CreditState = 'Not returned'AND Sum > 3000;

# 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
SELECT COUNT(idClient) FROM bank.client WHERE Department_idDepartment = 2;

# 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
