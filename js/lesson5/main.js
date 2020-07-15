// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// function obj(name, action, masiv = []) {
//     this.name = name;
//     this.action = action;
//     this.masiv = masiv;
// }

// let aObj = new obj(
//     'a',
//     `Тег <a> является одним из важных элементов HTML и предназначен для 
//     создания ссылок. В зависимости от присутствия атрибутов name или href 
//     тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри 
//     страницы, которую можно указать в качестве цели ссылки. При использовании 
//     ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.`,
//     [
//         {accesskey: 'Активация ссылки с помощью комбинации клавиш.'},
//         {coords: 'Устанавливает координаты активной области.'}
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'div',
//     `Элемент <div> является блочным элементом и предназначен для выделения 
//     фрагмента документа с целью изменения вида содержимого. Как правило, 
//     вид блока управляется с помощью стилей. Чтобы не описывать каждый раз 
//     стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для 
//     тега добавить атрибут class или id с именем селектора.`,
//     [
//         {align: 'Задает выравнивание содержимого тега <div>.'},
//         {title: 'Добавляет всплывающую подсказку к содержимому.'}
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'h1',
//     `тег <h1> представляет собой наиболее важный заголовок первого 
//     уровня, а тег <h6> служит для обозначения заголовка шестого уровня и 
//     является наименее значительным.`,
//     [
//         {align: 'Определяет выравнивание заголовка.'},
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'span',
//     `Тег <span> предназначен для определения строчных элементов документа.`,
//     [
//         'Для этого тега доступны универсальные атрибуты и события.'
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'input',
//     `Тег <input> является одним из разносторонних элементов формы и позволяет 
//     создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. `,
//     [
//         {accept: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {accesskey: 'Переход к элементу с помощью комбинации клавиш.'}
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'form',
//     `Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. `,
//     [
//         {accept_charset: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//         {action: 'Адрес программы или документа, который обрабатывает данные формы.'}
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'option',
//     `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.`,
//     [
//         {disabled: 'Заблокировать для доступа элемент списка.'},
//         {label: 'Указание метки пункта списка.'}
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'select',
//     `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также 
//     список с одним или множественным выбором, как показано далее.`,
//     [
//         {accesskey: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {autofocus: 'Устанавливает, что список получает фокус после загрузки страницы.'}
//     ]
// )
// console.log(aObj);


// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// class obj {
//     constructor(name, action, masiv = []) {
//         this.name = name;
//         this.action = action;
//         this.masiv = masiv;
//     }
// }

// let aObj = new obj(
//     'a',
//     `Тег <a> является одним из важных элементов HTML и предназначен для 
//     создания ссылок. В зависимости от присутствия атрибутов name или href 
//     тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри 
//     страницы, которую можно указать в качестве цели ссылки. При использовании 
//     ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.`,
//     [
//         {accesskey: 'Активация ссылки с помощью комбинации клавиш.'},
//         {coords: 'Устанавливает координаты активной области.'}
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'div',
//     `Элемент <div> является блочным элементом и предназначен для выделения 
//     фрагмента документа с целью изменения вида содержимого. Как правило, 
//     вид блока управляется с помощью стилей. Чтобы не описывать каждый раз 
//     стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для 
//     тега добавить атрибут class или id с именем селектора.`,
//     [
//         {align: 'Задает выравнивание содержимого тега <div>.'},
//         {title: 'Добавляет всплывающую подсказку к содержимому.'}
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'h1',
//     `тег <h1> представляет собой наиболее важный заголовок первого 
//     уровня, а тег <h6> служит для обозначения заголовка шестого уровня и 
//     является наименее значительным.`,
//     [
//         {align: 'Определяет выравнивание заголовка.'},
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'span',
//     `Тег <span> предназначен для определения строчных элементов документа.`,
//     [
//         'Для этого тега доступны универсальные атрибуты и события.'
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'input',
//     `Тег <input> является одним из разносторонних элементов формы и позволяет 
//     создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. `,
//     [
//         {accept: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {accesskey: 'Переход к элементу с помощью комбинации клавиш.'}
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'form',
//     `Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. `,
//     [
//         {accept_charset: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//         {action: 'Адрес программы или документа, который обрабатывает данные формы.'}
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'option',
//     `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.`,
//     [
//         {disabled: 'Заблокировать для доступа элемент списка.'},
//         {label: 'Указание метки пункта списка.'}
//     ]
// )
// console.log(aObj);

// let aObj = new obj(
//     'select',
//     `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также 
//     список с одним или множественным выбором, как показано далее.`,
//     [
//         {accesskey: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//         {autofocus: 'Устанавливает, что список получает фокус после загрузки страницы.'}
//     ]
// )
// console.log(aObj);


// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

//  let car = {
//      model: 'renault',
//      producer: 'france',
//      year: 2020,
//      maxSpeed: 220,
//      ingineCapacity: 1.6
//  };

//  function drive(){
//      console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`);
//  };
// drive();

// function info(){ 
//     console.log
//     (`Інфо про авто:
//     модель: ${car.model}
//     вирбник: ${car.producer}
//     рік: ${car.year}
//     Максимальна швидківсть: ${car.maxSpeed}
//     об'єм двигуна:${car.ingineCapacity}`);
// }
// info();

// function increaseMaxSpeed(newSpeed) {
//     car.maxSpeed = newSpeed;
// }
// increaseMaxSpeed(666);
// console.log(car.maxSpeed);

// function changeYear(newValue){
//     car.year = newValue;
// }
// changeYear(1989);
// console.log(car.year);

// function addDriver(driver){
//     car.driver = driver;
// }
// addDriver({name: 'Ilya', years: 29, gender: 'male', drivingLicence: true});
// console.log(car.driver);


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car(model, producer, year, maxSpeed, ingineCapacity){
//     this.model = model,
//     this.producer = producer,
//     this.year = year,
//     this.maxSpeed = maxSpeed,
//     this.ingineCapacity = ingineCapacity
    
//     this.drive = function drive() {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }

//     this.info = function info() {
//         console.log(
//             `модель: ${model}`,
//             `виробник: ${producer}`,
//             `рік випуску: ${year}`,
//             `максимальна швидківсть: ${maxSpeed}`,
//             `об'єм двигуна: ${ingineCapacity}`
//         )
//     }

//     this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed){
//         this.maxSpeed = newSpeed;
//     }

//     this.changeYear = function changeYear(newValue){
//         this.year = newValue;
//     }

//     this.addDriver = function addDriver(driver){
//         this.driver = driver;
//     }

// }
// let myCar = new Car('renault', 'France', 2020, 220, 1.6)
// myCar.drive();
// myCar.info();
// myCar.increaseMaxSpeed(666);
// console.log(myCar.maxSpeed);
// myCar.changeYear(1941);
// console.log(myCar.year);
// myCar.addDriver({name: 'Ilya', years: 29, gender: 'male', drivingLicence: true});
// console.log(myCar.addDriver);



// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor(model, producer, year, maxSpeed, ingineCapacity){
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.ingineCapacity = ingineCapacity;
//     }

//     drive(){
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }

//     info(){
//     console.log(
//         `модель: ${this.model}`,
//         `виробник: ${this.producer}`,
//         `рік випуску: ${this.year}`,
//         `максимальна швидківсть: ${this.maxSpeed}`,
//         `об'єм двигуна: ${this.ingineCapacity}`);
//     }

//     increaseMaxSpeed(newSpeed){
//     this.maxSpeed = newSpeed;
//     }

//     changeYear(newValue){
//     this.year = newValue;
//     }

//     addDriver(driver){
//     this.driver = driver;
//     }
// }

// let myCar = new Car('renault', 'France', 2020, 220, 1.6)
// myCar.drive();
// myCar.info();
// myCar.increaseMaxSpeed(666);
// myCar.changeYear(1941);
// myCar.addDriver({name: 'Ilya', years: 29, gender: 'male', drivingLicence: true});
// console.log(myCar);

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class snowWhite{
//     constructor(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let snowWgite1 = new snowWhite('Ira', 25, 35);
// let snowWgite2 = new snowWhite('Alina', 18, 38);
// let snowWgite3 = new snowWhite('Angelika', 45, 41);
// let snowWgite4 = new snowWhite('Inna', 20, 34);
// let snowWgite5 = new snowWhite('Anna', 24, 45);
// let snowWgite6 = new snowWhite('Vika', 27, 25);
// let snowWgite7 = new snowWhite('Leya', 17, 20);
// let snowWgite8 = new snowWhite('Liana', 19, 26);
// let snowWgite9 = new snowWhite('Marina', 54, 45);
// let snowWgite10 = new snowWhite('Maria', 45, 25);

// class prince{
//     constructor(name, age, findeFoot){
//         this.name = name;
//         this.age = age;
//         this.findeFoot = findeFoot;
//     }
// }

// let prince1 = new prince('Dima', 25, 34);

// let arrSnowWgite = [
//     snowWgite1,
//     snowWgite2,
//     snowWgite3,
//     snowWgite4,
//     snowWgite5,
//     snowWgite6,
//     snowWgite7,
//     snowWgite8,
//     snowWgite9,
//     snowWgite10
// ]

// for(let i of arrSnowWgite){
//     if(prince1.findeFoot === i.footSize){
//         console.log(i);
//     }
// }


// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
function snowWhite(name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let snowWgite1 = new snowWhite('Ira', 25, 35);
let snowWgite2 = new snowWhite('Alina', 18, 38);
let snowWgite3 = new snowWhite('Angelika', 45, 41);
let snowWgite4 = new snowWhite('Inna', 20, 34);
let snowWgite5 = new snowWhite('Anna', 24, 45);
let snowWgite6 = new snowWhite('Vika', 27, 25);
let snowWgite7 = new snowWhite('Leya', 17, 20);
let snowWgite8 = new snowWhite('Liana', 19, 26);
let snowWgite9 = new snowWhite('Marina', 54, 45);
let snowWgite10 = new snowWhite('Maria', 45, 25);

function prince(name, age, findeFoot){
    this.name = name;
    this.age = age;
    this.findeFoot = findeFoot;
}

let prince1 = new prince('Dima', 25, 34);

let arrSnowWgite = [
    snowWgite1,
    snowWgite2,
    snowWgite3,
    snowWgite4,
    snowWgite5,
    snowWgite6,
    snowWgite7,
    snowWgite8,
    snowWgite9,
    snowWgite10
]

for(let i of arrSnowWgite){
    if(prince1.findeFoot === i.footSize){
        console.log(i);
    }
    
}
d