/* Условие задачи
Мы в Авито любим проводить соревнования, — недавно мы устроили чемпионат по шагам. И вот настало время подводить итоги!

    Необходимо определить userIds участников, которые прошли наибольшее количество шагов steps за все дни, не пропустив ни одного дня соревнований.

    Пример
# Пример 1
# ввод
statistics = [
    [{ userId: 1, steps: 1000 }, { userId: 2, steps: 1500 }],
    [{ userId: 2, steps: 1000 }]
]

# вывод
champions = { userIds: [2], steps: 2500 }

# Пример 2
statistics = [
    [{ userId: 1, steps: 2000 }, { userId: 2, steps: 1500 }],
    [{ userId: 2, steps: 4000 }, { userId: 1, steps: 3500 }]
]

# вывод
champions = { userIds: [1, 2], steps: 5500 }*/

let statistics1 = [
    [{ userId: 2, steps: 1500 }],
    [{ userId: 2, steps: 1000 }, { userId: 1, steps: 5000 }]
]
let statistics2 = [
    [{ userId: 1, steps: 2000 }, { userId: 2, steps: 1500 }],
    [{ userId: 2, steps: 4000 }, { userId: 1, steps: 3500 }],
]

function getChampions(stats) {
    const totalDays = stats.length;
    const userSteps = {}, userDays = {};
    let maxSteps = 0;
    stats.forEach(day => {
        day.forEach(({userId, steps}) => {
            userSteps[userId] = (userSteps[userId] ?? 0) + steps;
            userDays[userId] = (userDays[userId] ?? 0) + 1;
        })
    })

    for (let key in userDays) {
        if (userDays[key] !== totalDays) {
            userSteps[key] = 0;
        } else {
            maxSteps = Math.max(maxSteps, userSteps[key]);
        }
    }

    const champions = {
        userIds: [],
        steps: maxSteps,
    }
    for (let key in userSteps) {
        if(userSteps[key] === maxSteps) {
            champions.userIds.push(+key);
        }
    }
    return champions;
}

console.log(getChampions(statistics1));
console.log(getChampions(statistics2))

// Нужно оптимизировать агоритм если во второй день пришло много пользователей, их не нужно ведь обрабатывать
// # Пример 3
// statistics = [
//     [{ userId: 1, steps: 2000 }, { userId: 2, steps: 1500 }],
//     [{ userId: 2, steps: 1 }, { userId: 1, steps: 1 }, {...}, {...}, ..., {...}], // пришло очень много участников
//     [{ userId: 2, steps: 4001 }, { userId: 1, steps: 3501 }]
// ]
//
// # вывод
// champions = { userIds: [1, 2], steps: 5501 }

function getChampionsOptimized(stats) {
    const totalDays = stats.length;
    const userSteps = {}, userDays = {};
    let maxSteps = 0;

    //предзаполнение активных пользователей
    for (let userId in stats[0]) {
        userDays[userId] = userDays[userId]  = (userDays[userId] ?? 0) + 1;
    }

    for (let day of stats) {
        for (let {userId} of day) {
            if (!userDays[userId]) continue; // пропувскаем пользователя
            userSteps[userId] = (userSteps[userId] ?? 0) + steps;
            userDays[userId]  = (userDays[userId] ?? 0) + 1;
        }
    }

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