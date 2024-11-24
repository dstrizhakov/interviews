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
    let maxSteps = 0
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
        if (userSteps[key] === maxSteps) {
            champions.userIds.push(+key);
        }
    }
    return champions;
}

console.log(getChampions(statistics1
))