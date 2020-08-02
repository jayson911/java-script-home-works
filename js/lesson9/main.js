// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// goWork(true, (sleep, money) =>{
//     if(sleep){
//         document.write('10:00 Ты проспал, тебя уволили')
//     }else{
//         document.write('Проснулся молодец иди завтракай')
//         Breakfast(money, (eat, sdacha)=>{
//             if(eat){
//                 document.write('Поел, теперь можно и поработать)')
//             }else{
//                 document.write('На голодный желудок работать не буду!')
//             }
//         })
//     }
// })


// function goWork(workHard){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (workHard){
//                 money = 1000;
//                 resolve(money)
//             }else{
//                 reject('тЫ уволен')
//             }
//         }, 1000)
//     })
// }

// function goBeer(money){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (money > 500){
//                 console.log('Ты бухой, иди домой')
//                 money = money - 500;
//                 resolve(money)
//             }else{
//                 console.log('нет денег, нет бухла')
//                 reject('Бомжам тут не место')
//             }
//         }, 1000)
//     })
// }

// goWork(true)
//     .then(reward =>{
//         console.log(reward);
        
//         return goBeer(money);
//     })
//     .then(sdacha =>{
//         console.log(sdacha);
//     })
//     .catch(reason =>{
//         console.error(reason)
//     })


// Необхіжно реалізувати друкарську машинку.
//1 У вас є інпут. 
//2. Ви в нього вводите якусь слово і тицькаєте кнопку "друкувати".
//3. Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели по одній букві 
//4. з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !
const print = document.getElementById('print')
const input = document.getElementById('input')
const text = document.getElementById('text')

function timeout(letter) {
    return new Promise(resolve => {
        setTimeout(() => {
            text.innerHTML += letter
            resolve()
        }, Math.random() * 400 + 100)

    })

}
print.onclick =  async () => {
    text.innerHTML = ''
    for(let i=0; i<input.value.length; i++){
        await timeout(input.value[i])
    }
}