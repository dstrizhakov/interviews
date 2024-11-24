/*
Дан массив билетов
[{from: 'Astana', to: 'Bali'},
{from: 'Moscow', to: 'Astana'},
{from: 'bali', to: 'SPb'},
]

Из этих билетов можно построить единственный, неразрывный маршрут.
Петель и повторов в маршруте нет.

Нужно написать программу, которая возвращает билеты
в порядке следования по маршруту.

Нужно расположить так чтобы получился непрерывный маршрут
 */

const tickets = [
    {from: 'Astana', to: 'Bali'},
    {from: 'Moscow', to: 'Astana'},
    {from: 'Bali', to: 'SPb'},
    // {from: 'SPb', to: 'Moscow'},

]


// рекурсивный алгоритм поиска с защитой от кольцевых маршрутов

function findPathRecursive(tickets) {
 if (!tickets.length)  return [];
 const result = [tickets[0]];

 const visited = [0]
    req(0, tickets, false, result, visited);
    req(0, tickets, true, result, visited);
    return result;
}

function req(index, tickets, checkFrom, result, visited) {
   const ticketIndex = tickets
       .findIndex(ticket => checkFrom ? ticket.from === tickets[index].to : ticket.to === tickets[index].from);
   if (ticketIndex === -1 || visited.indexOf(ticketIndex) !== -1) return null;
   visited.push(ticketIndex);
   if (checkFrom) {
       result.push(tickets[ticketIndex]);
   } else {
       result.unshift(tickets[ticketIndex]);
   }
   req(ticketIndex, tickets, checkFrom, result, visited);
}
// console.log(findPathRecursive(tickets));


function arrangeTickets(tickets) {

        if (!tickets.length) return [];

        // Создаем мапы для быстрого поиска
        const fromMap = new Map();
        const toMap = new Map();

        tickets.forEach(ticket => {
            fromMap.set(ticket.from, ticket);
            toMap.set(ticket.to, ticket);
        });

        // Находим начальную точку маршрута (нет входящих путей)
        const startTicket = tickets.find(ticket => !toMap.has(ticket.from));
        if (!startTicket) {
            throw new Error("Не удалось найти начальную точку маршрута");
        }

        let start = startTicket.from;

        // Собираем маршрут
        const result = [];
        while (start) {
            const ticket = fromMap.get(start);
            if (!ticket) break; // Если билеты закончились
            result.push(ticket);
            start = ticket.to;
        }

        return result;

}
console.log(arrangeTickets(tickets));


