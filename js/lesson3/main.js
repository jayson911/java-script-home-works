
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
// let users = {
//     dog: {
//         name: 'Archy',
//         age: '2 years',
//         dogBreed: 'Husky',
//         color: 'Grey',
//         gender: 'boy'
//     },
//     human: {
//         name: 'Ilya',
//         age: 29,
//         wife: true,
//         car: 'Renault Duster',
//         height: '192 cm'
//     },
//     Car: {
//         model: 'Reanult Duster',
//         year: 2020,
//         fuel: 'petrol',
//         engineСapacity: 1.6,
//         damage: false
//     },
//     Flat: {
//         rooms: 2,
//         adress: 'Nikolaev',
//         floor: 10,
//         balcony: true,
//         own: true
//     },
//     Book: {
//         Name: 'Harry Potter',
//         auther: 'Joanne Rowling',
//         BookSeries: 7,
//         Start: 1997,
//         End: 2007
//     }
// }
// console.log(users);

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
// let users = [
//     {dog1: 'husky', dog2: 'labrador', dog3: 'pit Bull', dog4: 'golden retriever', dog5: 'german shepherd dog'},
//     {name1: 'Anton', name2: 'Vlad', name3: 'Vladimir', name4: 'Bob', name5: 'Jason'},
//     {car1: 'impala', car2: 'ford', car3: 'toyota', car4: 'vaz', car5: 'renault'}
// ];
// console.log(users);


// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
// let obj = {
//     Flat: {
//         rooms: 2,
//         adress: 'Nikolaev',
//         floor: 10,
//         balcony: true,
//         own: true
//     },
//     driver: {
//         name: 'Ilya',
//         age: 29,
//         wife: true,
//         car: 'Renault Duster',
//         height: '192 cm'
//     },
//     toy: {
//         name: 'qudrocopter',
//         tradeMark: 'dji',
//         workTime: '30 min',
//         maxWeith: '3000 m',
//         camera: true
//     },
//     table: [
//         {material: 'Wood', color: 'red', weith: 175, height: 50, chairs: true}
//     ],
//     bag: {
//         type: 'hand bag',
//         made: 'ua',
//         material: 'leather',
//         size: '25x20x10',
//         brand: 'mr.Brown'
//     }
// };
// console.log(obj);


// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
			// ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// let AndreyStatus = users[7].status;
// console.log(AndreyStatus);
// // - статус Максима
// let MaxStatus = users[4].status;
// console.log(MaxStatus);
// // - ім'я передостаннього об'єкту
// let OlyaName = users[9].name;
// console.log(OlyaName);
// // - ім'я третього об'єкта
// let KolyaName = users[2].name;
// console.log(KolyaName);
// // - вік Олега
// let OlegAge = users[6].age;
// console.log(OlegAge);
// // - вік Ол
// let OlyaAge = users[3].age;
// console.log(OlyaAge);
// // - вік + ім'я 5го об'єкта
// let MaxAge = users[4].age;
// let MaxName = users[4].name;
// console.log(MaxAge, MaxName);
// // - вік + сатус Анни
// let AnyaAge = users[5].age;
// let AnyaStatus = users[5].status;
// console.log(AnyaAge, AnyaStatus);
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!


// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let content = document.getElementById('content');
// console.log(content);
// - отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules);
// - замініть текст параграфа з id 'content' на будь-який інший
// let content = document.getElementById('content');
// content.innerText = 'fight club';
// console.log(content);
// - замініть текст параграфа з id 'rules' на будь-який інший
// let rules = document.getElementById('rules');
// rules.innerText = 'abra kadabra';
// console.log(rules);
// - змініть кожному елементу колір фону на червоний
// let ElementColor = document.getElementsByTagName('li');
// for(i = 0; i < ElementColor.length; i++) {
//     ElementColor[i].style.background = 'red';
// }
// console.log(ElementColor);

// - змініть кожному елементу колір тексту на синій
// let ElementColor = document.getElementsByTagName('p');
// for(i = 0; i < ElementColor.length; i++) {
//     ElementColor[i].style.background = 'blue';
// }
// console.log(ElementColor);
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let elemen = document.getElementById('rules');
// console.log(elemen.classList);
// - отримати всі елементи з класом fc_rules
// let element = document.getElementsByClassName('fc_rules')
// console.log(element);
// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let element = document.getElementsByClassName('fc_rules')
// for(i = 0; i < element.length; i++) {
// element[i].style.background = 'red';
// }
// console.log(element);

// ====================
// ====================
// ====================

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let txtColor = document.getElementById('main_header')
// txtColor.style.color = 'red';
// console.log(txtColor);
// -- робить шириниу елементу ul 400 пікселів
// let widthUl = document.getElementsByTagName ('ul') [0];
// widthUl.style.width = '400px';
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// let links = document.getElementsByClassName ('linkList');
// for(i = 0; i < links.length; i++) {
//     links[i].style.width = '50%';
// }
// console.log(links);
// -- отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.querySelector('.listElement2');
// console.log(listElement2.textContent)
// -- отримує всі елементи li та змінює ім колір фону на сірий
// let liColor = document.getElementsByTagName('li');
// for(i = 0; i < liColor.length; i++) {
//     liColor[i].style.backgroundColor = 'grey';
// }
// console.log(liColor);
// -- отримує всі елементи 'a' та додає їм клас anchor
// let aElem = document.getElementsByTagName('a');
// for(i = 0; i < aElem.length; i++) {
//     let elemen = aElem[i];
//     elemen.classList.add('anchor');
// }
// console.log(aElem);
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aElem = document.getElementsByTagName('a');
// for(i = 0; i < aElem.length; i++) {
//     let elemen = aElem[i];
//     if(elemen.textContent == 'link3') elemen.style.fontSize = '40px';
// }
// console.log(aElem);
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aElem = document.getElementsByTagName('a');
// for (i = 0; i < aElem.length; i++) {
//     let element = aElem[i];
//     element.classList.add(`element_${element.textContent}`);
// }
// console.log(aElem);
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let b = prompt('Фон');
// let a4 = document.getElementsByClassName('sub-header');
// for (i = 0; i < a4.length; i++) {
//     let element = a4[i];
//     element.style.background = b;
// }
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment. 
// Колір отримати з prompt()
    let inOf = element.textContent.indexOf('content 2');
    if(inOf !== -1) element.style.color = prompt('color');
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
    // let inOf1 = element.textContent.indexOf('content 1');
    // if(inOf1 !== -1) element.innerHTML = prompt('елемент з класом content_1 заміняє тест на довільний');
// }

// -- отримати елементи p та змінити їм paddin на довільне значення
// let p = document.getElementsByTagName('p');
// for (i = 0; i < p.length; i++) {
//     let element = p[i];
//     element.style.padding = '10px';
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
//     let inOf1 = element.className.indexOf('text2');
//     if(inOf1 !== -1) element.innerHTML = 'отримати елементи з класом text2 та змінити їм текст на довільне значення';
// }