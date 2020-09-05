// Клас людина:
//   поля:
//     вага,зріст
// Клас депутат(наслідується від людини):
//   поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
//   методи:
//     дати хабаря(зробити відповідні перевірки...
//       якщо депутат не хабарник то щоб він відмовився,
//       або ж якщо сума хабаря надто велика то щоб він вагався
//       чи брати чи ні)
// Клас фракція
//   поля:
//     список депутатів
//   методи:
//     додати депутата (вводимо з клави)
//     видалити депутата(теж з клави)
//     видалити всіх негідників які брали хабаря
//     вивести найбільшого хабарника
//     вивести всіх депутатів
//     видалити всіх депутатів
//     вивести загальну суму хабарів для фракції
// клас Верховна рада
//   поля:
//     мапа фракцій
//   методи:
//     додати\видалити фракцію
//     вивести всі фракції
//     вивести конкретну фракцію
//     додати\видалити депутата з фракції
//     вивести всіх хабарників фракції
//     вивести найбільшого хабарника у фрації
//     вивести найбільшого хабарника верховної ради
//     вивести фсіх депутатів фракції
//     вивести найбільшого хабарника фракції

// в майні зробити через switch меню
//   1 - Верховна рада
//   2 - Фракція
//   3 - Депутат
// відповідно при вводі з клави певної цифри ми попадаєио в інше меню
//   якщо ми нажали 1 то нам промалюється в консолі таке меню
//   1-додати фракцію
//   2-вивести всі фракції
//   3-вивести найбільшого хабарника
// меню робимо на свій смак

enum Habar {
    Habar1 = '100',
    Habar2 = '2000'
}

class Human {
    weight: number;
    height: number;
    constructor(weight:number, height:number){
        this.weight = weight;
        this.height = height;
    }
}

class Dep extends Human{
    surname: string;
    name: string;
    age: number;
    Habarnik: boolean;
    Habar: number;

    constructor(weight: number, height: number, surname: string, name: string, age: number, Habarnik: boolean, Habar: number){
        super(weight, height);
        this.weight = weight;
        this.height = height;
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.Habarnik = Habarnik;
        this.Habar = Habar;
    }

    GiveHabar(HabarType:Habar): void {
        if(!this.Habar){
            console.log(`${this.name}: я не беру!`);
        }else {
            if(this.Habarnik && HabarType == Habar2){
                console.log(`${this.name}: we need more money!`)
            }
        }
    }
}
let dep1 = new Dep(70, 170, 'Tishenko', 'Nikolay', 29, true, 2000000);
console.log(dep1)