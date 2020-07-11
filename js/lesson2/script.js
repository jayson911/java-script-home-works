// --створити масив та вивести його в консоль:
// - з 5 числових значень
// let arr = ['1', '2', '3', '4', '5'];
// console.log(arr);

// - з 5 стічкових значень
// let arr =['a', 'b', 'c', 'd', 'e']
// console.log(arr);

// - з 5 значень стрічкового, числового та булевого типу
// let arr = [
// ['1', '2', '3', '4', '5'],
// ['a', 'b', 'c', 'd', 'e'],
// [true, false]
// ];
// console.log(arr);

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let txt = [];
// txt[1] = 'my';
// txt[2] = 'name';
// txt[3] = 'is';
// txt[4] = 'slim';
// txt[5] = 'shady';
// txt[6] = 29;
// txt[7] = true;
// txt[8] = false;
// txt[9] = 'hello';
// txt[10] = 'owu';
// for (e of txt){
//     console.log(e);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i<10; i++) {
//     document.write('<div> hello world </div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i<10; i++) {
//     document.write(`<div>hello ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let txt = 0;
// while (txt < 20) {
//     document.write('<h1> hello world </h1>');
//     txt++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let txt = 0;
// while (txt < 20) {
//     document.write(`<h1> hello world ${txt}</h1>`);
//     txt++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++ ) {
// console.log(numbers[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let txt = ['my', 'name', 'is', 'slim', 'shady', 'hello', 'world', 'owu', 'me', 'myselfe'];
// for (let i = 0; i < txt.length; i++ ) {
// console.log(txt[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let masiv = ['my', 'name', 20, 'slim', true, 'hello', false, 'owu', 255, 'myselfe'];
// for (let i = 0; i < masiv.length; i++ ) {
// console.log(masiv[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let masiv = ['my', 'name', 20, 'slim', true, 'hello', false, 'owu', 255, 'myselfe'];
// for(let i = 0; i<masiv.length; i++){
//     if(typeof masiv[i] === "boolean"){
//         console.log(masiv[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let masiv = ['my', 'name', 20, 'slim', true, 'hello', false, 'owu', 255, 'myselfe'];
// for(let i = 0; i<masiv.length; i++){
//     if(typeof masiv[i] === 'number'){
//         console.log(masiv[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let masiv = ['my', 'name', 20, 'slim', true, 'hello', false, 'owu', 255, 'myselfe'];
// for(let i = 0; i<masiv.length; i++){
//     if(typeof masiv[i] === 'string'){
//         console.log(masiv[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let txt = [];
// txt[1] = 'my';
// txt[2] = 'name';
// txt[3] = 'is';
// txt[4] = 'slim';
// txt[5] = 'shady';
// txt[6] = 29;
// txt[7] = true;
// txt[8] = false;
// txt[9] = 'hello';
// txt[10] = 'owu';
// console.log(txt[2], txt[5], txt[10]);

// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// let masiv = ['my', 'name', 20, 'slim', true, 'hello', false, 'owu', 255, 'myselfe'];
// for(let i = 0; i < 10; i++) {
//     document.write(i);
//     document.write(`<br>`);
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i++) {
//     document.write(i);
//     document.write(`<br>`);
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i = i + 2) {
//     document.write(i);
//     document.write(`<br>`);
//     console.log(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i = 0; i < 100; i+=2) {
//     document.write(i);
//     document.write(`<br>`);
//     console.log(i);
//     }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 0; i < 100; i+=3) {
//     document.write(i);
//     document.write(`<br>`);
//     console.log(i);
//     }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for(let hours = 0; hours < 3; hours++){
//     for(let minutes = 0; minutes < 60; minutes++){
//         if (hours === 2 && minutes === 20){
//             break;
//         }
//         for(let seconds = 0; seconds < 60; seconds++){
//             console.log(hours + ' час. ' + minutes + ' мин. ' + seconds + ' сек.');
//         }
//     }
// }

//   Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrq = [ 'a', 'b', 'c'];
let str = '';
for(let h = 0; h < arrq.length; h++) {
    str += arrq[h];
}
console.log(str);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arrw = [ 'a', 'b', 'c'];
// let strw = '';
// while(strw.length < arrw.length){
//     strw += arrw[strw.length];
// }
// console.log(strw);


// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arre = [ 'a', 'b', 'c'];
let stre = '';
for (const iterator of arre) {
    stre += iterator
}
console.log(stre);

// // =================
// // =================
// // =================
// // =================

// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arrt = [ 'a', 'b', 'c'];
// for (let index = 0; index < 3; index++) {
//     arrt.push(index + 1)
// }
// console.log(arrt);

// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arry = [1, 2, 3];
// let arryMod = []
// for (let index = 0; index < arry.length; index++) {
//     arryMod.push(arry[(arry.length - 1) - index]);
// }
// console.log(arryMod);

// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arru = [1, 2, 3];
// for (let index = 0; index < 3; index++) {
//     arru.push(arru.length + 1);
// }
// console.log(arru);

// // - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arruy = [1, 2, 3];
// for (let index = 0; index < 3; index++) {
//     arruy.unshift((arruy.length - index + 3) - index);
// }
// console.log(arruy);

// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arrjs = ['js', 'css', 'jq'];
// document.write(arrjs.shift());

// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arrjq = ['js', 'css', 'jq'];
// document.write(arrjs.pop());

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arrjqc = [1, 2, 3, 4, 5];
// arrjq.slice(3,4);


// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arrjgs = [1, 2, 3, 4, 5];
// arrjq.slice(0,1);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arrjg = [1, 2, 3, 4, 5];
// arrjq.splice(1,2);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arrjgf = [1, 2, 3, 4, 5];
// arrjgf.splice(3,0,'a', 'b', 'c');

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arrjfff = [1, 2, 3, 4, 5];
// arrjfff.splice(1,0,'a', 'b')
// arrjfff.splice(6,0,'c')
// arrjfff.splice(arrjfff.length,0,'e');
// console.log(arrjfff);

// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr33u = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < arr33u.length; index++) {
//     if(!(arr33u[index] % 2)) {
//         console.log(arr33u[index]);   
//     } 
// }
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr33ud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = []
// for (let index = 0; index < arr33u.length; index++) {
//     newArr.push(arr33u[index]);
// }
// console.log(newArr);

// // ============

// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// // 1. перебрати його циклом while
// let artfd = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < artfd.length ){
//     i++
// }

// // 2. перебрати його циклом for

// let artfdd = [2,17,13,6,22,31,45,66,100,-18];
// for (let index = 0; index < artfd.length; index++) {
//     const element = artfd[index];
// }

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let aretfd = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < aretfd.length ){
//     if(i%2) console.log(aretfd[i])
//     i++;
// }

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let aretfddg = [2,17,13,6,22,31,45,66,100,-18];
// for (let index = 0; index < aretfddg.length; index++) {
//     if(index % 2) {
//         console.log(aretfddg[index]);   
//     } 
// }

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let aretfd = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < aretfd.length ){
//     if(!(i%2)) console.log(aretfd[i])
//     i++;
// }

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// let at = [2,17,13,6,22,31,45,66,100,-18];
// for (let index = 0; index < at.length; index++) {
//     if(!(index % 2)) {
//         console.log(at[index]);   
//     } 
// }


// // 7. замінити кожне число кратне 3 на слово "okten"
// let adt = [2,17,13,6,22,31,45,66,100,-18];
// for (let index = 0; index < adt.length; index++) {
//     if(!(adt[index] % 3)) {
//         adt[index] = "okten"
//     } 
// }
// console.log(adt);   

// // 8. вивести масив в зворотньому порядку.
// let adt3 = [2,17,13,6,22,31,45,66,100,-18];
// adt3.reverse();
// console.log(adt3);

// // 10
// //  створити пустий масив та :
// // - заповнити його 50 парними числами за допомоги циклу.
// // - заповнити його 50 непарними числами за допомоги циклу.
// let adt50 = [];
// for (let index = 0; index < 100; index++) {
//     if(!(adt50[index] % 2)) adt50[index] = index
//     adt50[index] = index
// }
// console.log(adt50);   

// // 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// //  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let ar = []
// let pairedNumbers = [] 
// for (let index = 0; index < 100; index++) {
//     let number = Math.floor((Math.random() + Math.random()) * 100);
//     ar.push(number);
// //  2. вывести на консоль  каждый третий елемент
//     if(!(index % 3) && index != 0){
//         console.log(`каждый третий елемент ////     ${ar[index -1]}`)
//     }
// //  3. вывести на консоль  каждый третий елемент
// //  но при условии что его значение является парным.
//     if(!(index % 3) && index != 0){
//         if(!(ar[index -1] % 2)){
//             console.log(`каждый третий елемент является парным ////     ${ar[index -1]}`)
//         }
//     }
// //  4. вывести на консоль  каждый третий елемент
// //  но при условии что он имеет парное значение и
// //  записать их в другой массив.
//     if(!(index % 3) && index != 0){
//         if(!(ar[index -1] % 2)){
//             pairedNumbers.push(ar[index -1])
//         }
//     }
// //  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
//     if(index != 0 && !(index % 2) && !(ar[index] % 2) ){
//         console.log(`соседний с права элемент - парный ////    ${ar[index]}`)
//     }
// }
// console.log(ar)


// //   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let arifme = [100,250,50,168,120,345,188];
// let quantity = 0;

// for (let index = 0; index < arifme.length; index++) {
//     quantity += arifme[index];
// }
// let check = quantity / arifme.length;
// console.log(check);


// // 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arrRa = [];
// let arrRandom = [];

// for (let index = 0; index < 20; index++) {
//     let numberRand = Math.floor((Math.random() * 5) * (Math.random() + 10));
//     arrRandom.push(numberRand);
//     arrRa.push(arrRandom[index] * 5);
// }
// console.log(arrRa);


// // 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// //  додати його в інший масив.
// const fakeArray = [null, 0,'3', 3333, true, NaN, Boolean, Number, Array, 1, 4, '', {}];
// const drdwesdsdew = [];

// for (const iterator of fakeArray) {
//     if(typeof iterator === 'number') drdwesdsdew.push(iterator);
// }

// console.log(drdwesdsdew);
sgsgsgs
