// - створити функцію яка виводить масив
// function writer() {
//     document.write('Hello i want to be a java developer');
// }
// writer();
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function writer(a) {
//     console.log(a);
// }
// writer(1, 2, 3, 4, 5, 6);
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minNum() {
//     let min = arguments[0];

//     for(let i = 0; i < arguments.length; i++) {
//         if(arguments[i] < min) {
//             min = arguments[i]
//         }

//         console.log(min)
//     }
// }
// minNum(22, 55, 75);
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxNum() {
//     let max = arguments[0];
//     for(let i = 0; i < arguments.length; i++) {
//         if(arguments[i] > max) {
//             max = arguments[i]
//         }
//         console.log(max);
//     }
// }
// maxNum(555, 22, 345);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function minMax(){
//     let max = arguments[0];
//     let min = arguments[0];
//     for(let i = 0; i < arguments.length; i++) {
//         if(arguments[i] < min){
//             min = arguments[i];
//         }
//         if(arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     console.log(max + ' Max');
//     return min;
// }
// let min = minMax(1, 2, 3, 55, 66, -96, -678, 245, 675, 5, 3, 66, 77);
// - створити функцію яка виводить масив
// function number() {
//     const arr = [];
// }
// - створити функцію яка повертає найбільше число з масиву
// function retMaxNum(someArr=[]){
//     let max=someArr[0];
//     for(let i=0;i<someArr.length;i++){
//        if(someArr[i]>max){
//            max=someArr[i];
//        }
//     }
//     console.log(max);
//     return max;
    
// }
// retMaxNum([1, 4, 5, 6, 7, 8, 9]);

// - створити функцію яка повертає найменьше число з масиву
// function retMinNum(someArr=[]){
//     let min=someArr[0];
//     for(let i=0;i<someArr.length;i++){
//         if(someArr[i]<min){
//             min=someArr[i];
//         }
//     }
//     console.log(min);
//     return min;    
//     }
// retMinNum([1, 4, 5, 6, 7, 8, 9]);
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function summ(){
	sum = 0;
	for (i of arguments){
		sum +=i;
    }
    console.log(sum);
	return sum;
}
summ (5, 4);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:



// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];
// "

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========