// 1) Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає
// об’єкт з методами:
const card3 = userCard(3); // returns an object with methods
function userCard(number) {
    let balance = 100;
    let transactionLimit = 100;
    const historyLogs = [];
    let key = number <= 3
        ? number
        : 'key is not working'

    function getCardOptions(){
        return `key : ${key}\n` + 
            `balance ${balance}\n`+
            `transactionLimit ${transactionLimit}\n`+
            `historyLogs ${JSON.stringify(historyLogs)}\n`;
    }

    return {
        getCardOptions.
    }
}
