
// - создать массив с 20 числами.
// let arr = [1, 2, 4, 55, 88, 7, 29, 58, 78, 63, 52, 14, 56, 69, 99, 46, 85, 25, 45, 32];
// -- при помощи метода sort и колбека  отсортировать массив.
// let resultSort = arr.sort((a, b) => {
//     return a - b;
// });
// console.log(resultSort);
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let resultSort = arr.sort((a, b) => {
//     return b - a;
// });
// console.log(resultSort);
// -- при помощи filter получить числа кратные 3
// let result = arr.filter((num) => {
//     if (num % 3 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// console.log(result);
// -- при помощи filter получить числа кратные 10
// let result = arr.filter((num) => {
//     if (num % 10 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// console.log(result);
// -- перебрать (проитерировать) массив при помощи foreach()
// let result = arr.forEach ((num) => {
//     console.log(num);
// })
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let result = arr.map ((num) => {
//     return num * 3;
// })
// console.log(result);

// - создать массив со словами на 15-20 элементов.
// let txt = ['make', 'some', 'noise', 'hi', 'owu', 'and', 'octen', 'big', 'little', 'ok', 'craete', 'animal', 'car', 'hello', 'siri'];
// -- отсортировать его по алфавиту в восходящем порядке.
// let result = txt.sort((a, b) => {
//     if (a > b){
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(result);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let result = txt.sort((a, b) => {
//     if (a < b){
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(result);
// -- отфильтровать слова длиной менее 4х символов
// let result = txt.filter(word => word.length <= 4);
// console.log(result);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let result = txt.map(word => word + '!');
// console.log(result);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ 
//     {name: 'vasya', age: 31, status: false}, 
//     {name: 'petya', age: 30, status: true}, 
//     {name: 'kolya', age: 29, status: true}, 
//     {name: 'olya', age: 28, status: false}, 
//     {name: 'max', age: 30, status: true}, 
//     {name: 'anya', age: 31, status: false}, 
//     {name: 'oleg', age: 28, status: false}, 
//     {name: 'andrey', age: 29, status: true}, 
//     {name: 'masha', age: 30, status: true}, 
//     {name: 'olya', age: 31, status: false}, 
//     {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sortUsersAge = users.sort((a, b) => {
//     return a.age - b.age;
// })
// console.log(sortUsersAge);

// let sortUsersAge = users.sort((a, b) => {
//     return b.age - a.age;
// })
// console.log(sortUsersAge);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let findedUser = users.sort(function(a, b){
//     let aName = a.name.length;
//     let bName = b.name.length;
//     if (aName < bName){
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(findedUser)

// let findedUser = users.sort(function(a, b){
//     let aName = a.name.length;
//     let bName = b.name.length;
//     if (aName > bName){
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(findedUser)

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let usersId = users.map((user, id) => {
//     user.id = id + 1

//     return user;
// })
// console.log(usersId)
// - відсортувати його за індентифікатором
// let sortById = users.sort((a, b) => {
//     let id_1 = a.id;
//     let id_2 = b.id;
//     if(id_1 > id_2){
//         return 1
//     } else {
//         return -1;
//     }
// })
// console.log(sortById);


// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculator(a, b, callback){
//    console.log(callback(a, b));  
// }

// calculator(10, 20, function(a, b){
//     return a + b;
// })
// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculator(a, b, c, callback){
//     console.log(callback(a, b, c));  
//  }
 
//  calculator(10, 20, 55, function(a, b, c){
//      return a + b * c;
//  })

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




// let cars = [ 
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume: 3, power: 400}, 
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let volumee = cars.filter((value) =>{
//     return value.volume <= 3;
// })
// console.log(volumee);

// - двигун = 2л
// let volumee = cars.filter((value) =>{
//     return value.volume === 2;
// })
// console.log(volumee);

// - виробник мерс
// let coolCar = cars.filter((car) =>{
//     return car.producer === 'mercedes'
// })
// console.log(coolCar)

// - двигун більше 3х літрів + виробник мерседес
// let bigDaddyCars = cars.filter((car) =>{
//     return car.volume > 3 && car.producer === 'mercedes'
// })
// console.log(bigDaddyCars);

// - двигун більше 3х літрів + виробник субару
// let bigDaddyCars = cars.filter((car) =>{
//     return car.volume > 3 && car.producer === 'subaru'
// })
// console.log(bigDaddyCars);

// - сили більше ніж 300
// let bigDaddyCars = cars.filter((car) =>{
//     return car.power > 300;
// })
// console.log(bigDaddyCars);

// - сили більше ніж 300 + виробник субару
// let bigDaddyCars = cars.filter((car) =>{
//     return car.power > 300 && car.producer === 'subaru'
// })
// console.log(bigDaddyCars);

// // - мотор серіі ej
// let bigDaddyCars = cars.filter((car) => {
//     return car.engine.startsWith('ej');
// })
// console.log(bigDaddyCars);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let bigDaddyCars = cars.filter((car) =>{
//     return car.power > 300 && car.producer.startsWith('sub') && car.engine.startsWith('ej');
// })
// console.log(bigDaddyCars);

// - двигун меньше 3х літрів + виробник мерседес
// let bigDaddyCars = cars.filter((car) =>{
//     return car.volume < 3 && car.producer.startsWith('mer');
// })
// console.log(bigDaddyCars);

// - двигун більше 2л + сили більше 250
// let bigDaddyCars = cars.filter((car) =>{
//     return car.volume > 2 && car.power > 250;
// })
// console.log(bigDaddyCars);

// - сили більше 250  + виробник бмв
// let bigDaddyCars = cars.filter((car) =>{
//     return car.power > 250 && car.producer.startsWith('sub')
// })
// console.log(bigDaddyCars);



// - взять слдующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// let usersId = usersWithAddress.sort((a, b) =>{
//     if (a.id > b.id){
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(usersId);
// -- отсортировать его по id пользователей в обратном опрядке
// let usersId = usersWithAddress.sort((a, b) =>{
//     if (b.id > a.id){
//         return 1;
//     } else{
//         return -1;
//     }
// })
// console.log(usersId);
// -- отсортировать его по возрасту пользователей
// let usersAge = usersWithAddress.sort((a, b) =>{
//     if (a.age > b.age){
//         return 1;
//     } else{
//         return -1;
//     }
// })
// console.log(usersWithAddress);
// -- отсортировать его по возрасту пользователей в обратном порядке
// let usersAge = usersWithAddress.sort((a, b) =>{
//     if(b.age > a.age){
//         return 1;
//     } else{
//         return -1;
//     }
// })
// console.log(usersWithAddress);
// -- отсортировать его по имени пользователей
// let usersName = usersWithAddress.sort((a, b) =>{
//     if (a.name > b.name){
//         return 1;
//     } else{
//         return -1;
//     }
// })
// console.log(usersName);
// -- отсортировать его по имени пользователей в обратном порядке
// let usersName = usersWithAddress.sort((a, b) =>{
//     if(b.name > a.name){
//         return 1;
//     } else{
//         return -1;
//     }
// })
// console.log(usersWithAddress);
// -- отсортировать его по названию улицы  в алфавитном порядке
// let usersAdress = usersWithAddress.sort((a, b) =>{
//     if(a.address.street > b.address.street){
//         return 1;
//     } else{
//         return -1;
//     }
// })
// console.log(usersWithAddress);
// -- отсортировать его по номеру дома по возрастанию
// let usersAdress = usersWithAddress.sort((a, b) =>{
//     if(a.address.number > b.address.number){
//         return 1;
//     } else{
//         return -1;
//     }
// })
// console.log(usersWithAddress);
// -- отфильтровать (оставить) тех кто младше 30
// let usersAge = usersWithAddress.filter((age) =>{
//     return age.age < 30;
// })
// console.log(usersAge);
// -- отфильтровать (оставить) тех у кого отрицательный статус
// let usersStatus = usersWithAddress.filter((status) =>{
//     return !status.status
// })
// console.log(usersStatus);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let users = usersWithAddress.filter((user) =>{
//     return !user.status && user.age < 30
// })
// console.log(users);
// -- отфильтровать (оставить) тех у кого номер дома четный
// let usersHouse = usersWithAddress.filter((user) =>{
//     if (user.address.number % 2 === 0){
//         return true;
//     } else{
//         return false;
//     }   
// })
// console.log(usersHouse);


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
let cars = [0,
    {producer: 'subaru', power: 400, user:{name: 'vova', age: 35, experience: 10}, price: 17000, year: 2016},
    {producer: 'bmw', power: 350, user:{name: 'gena', age: 30, experience: 3}, price: 15000, year: 2018},
    {producer: 'mersedec', power: 500, user:{name: 'andrey', age: 45, experience: 15}, price: 18000, year: 2020},
    {producer: 'renault', power: 150, user:{name: 'vika', age: 45, experience: 1}, price: 9000, year: 2010},
    {producer: 'vaz', power: 100, user:{name: 'miha', age: 55, experience: 30}, price: 1000, year: 1989},
    {producer: 'ford', power: 450, user:{name: 'kolyan', age: 31, experience: 15}, price: 12000, year: 2005},
    {producer: 'toyota', power: 600, user:{name: 'viktor', age: 22, experience: 5}, price: 16000, year: 2009},
    {producer: 'seat', power: 115, user:{name: 'dimas', age: 36, experience: 17}, price: 10000, year: 2013}
]
// // // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
for(let i = 0; i < cars.length; i += 2){
   cars[i].power += (cars[i].power *= 0.1);
    }
console.log(cars);
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// for(let i = 0; i < cars.length; i += 2){
//     cars[i].power += (cars[i].power *= 0.1);
//     cars[i].price += (cars[i].price *= 0.05);
//      }
//  console.log(cars);
// Після того зробити перевірку досвіду ВСІХ наших водіїв. 
// Якщо досвід водія менший за 5 років, але його вік більший за 25, 
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// for(let i = 0; i < cars.length; i++){
//     if(cars[i].user.experience < 5 && cars[i].user.age > 25){
//         cars[i].user.experience++;    
//     }
// }
// console.log(cars);

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let allCarsSum = cars.reduce((acc, curr) =>{
//     return acc + curr.price;
// });
// console.log(allCarsSum);


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

// function finder(number, arr) {

//   let minIndex = arr.indexOf(number)
//   let maxIndex = arr.lastIndexOf(number)

//   console.log('MinIndex = ' + minIndex)
//   console.log('MaxIndex = ' + maxIndex)
// }
// finder(1, arr)
// finder(4, arr)