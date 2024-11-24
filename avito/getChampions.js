// Условие задачи 1
// Мы в Авито любим проводить соревнования, — недавно мы устроили чемпионат по шагам. И вот настало время подводить итоги!
//
//     Необходимо определить userIds участников, которые прошли наибольшее количество шагов steps за все дни, не пропустив ни одного дня соревнований.
//
//     Пример
// # Пример 1
// # ввод
// statistics = [
//     [{ userId: 1, steps: 1000 }, { userId: 2, steps: 1500 }],
//     [{ userId: 2, steps: 1000 }]
// ];
// # вывод
// champions = { userIds: [2], steps: 2500 }

// # Пример 2
// statistics = [
//     [{ userId: 1, steps: 2000 }, { userId: 2, steps: 1500 }],
//     [{ userId: 2, steps: 4000 }, { userId: 1, steps: 3500 }]
// ]
//
// # вывод
// champions = { userIds: [1, 2], steps: 5500 }
//
// ------ Пиши решение и любые заметки ниже ------


// # Пример 3
// statistics = [
//     [{ userId: 1, steps: 2000 }, { userId: 2, steps: 1500 }],
//     [{ userId: 2, steps: 1 }, { userId: 1, steps: 1 }, {...}, {...}, ..., {...}], // пришло очень много участников
//     [{ userId: 2, steps: 4001 }, { userId: 1, steps: 3501 }]
// ]
//
// # вывод
// champions = { userIds: [1, 2], steps: 5501 }

// class MyHashMap
// add(key, value)
// hash(...)
// get(key) -> O(1)
// size
// delete

// по времени О(N+M), N колво дней, M колво Юзеров
// по памяти О(M)
function getChampions (stats) {
    const totalDays = stats.length;
    const userSteps = {}, userDays = {};
    let maxSteps = 0;

    //предзаполнение активных пользователей
    for (let userId in stats[0]) {
        userDays[userId] = userDays[userId]  = (userDays[userId] ?? 0) + 1;
    }

    for (let day of stats) {
        for (let {userId} of day) {
            if (!userDays[userId]) continue;
            userSteps[userId] = (userSteps[userId] ?? 0) + steps;
            userDays[userId]  = (userDays[userId] ?? 0) + 1;
        }
    }

    // stats.forEach(day => {
    //     day.forEach(({userId, steps}) => {
    //         userSteps[userId] = (userSteps[userId] ?? 0) + steps;
    //         userDays[userId]  = (userDays[userId] ?? 0) + 1;
    //     })
    // })
    for (let userId in userDays) {
        if ( userDays[userId] !== totalDays) {
            userSteps[userId] = 0;
        } else {
            maxSteps = Math.max(maxSteps, userSteps[userId]);
        }
    }
    const champions = { userIds: [], steps: maxSteps };
    for (let userId in userSteps) {
        if (userSteps[userId] === maxSteps) {
            champions.userIds.push(+userId)
        }
    }
    return champions;
}