// 5

/*
* Напишите функцию retryFetch поверх fetch API, которая отправляет запрос в случае неудачи N раз
* Функция принимает те же параметры, что и fetch + количество попыток и возвращает Promise.
    Если метод запроса PUT, то повторных запросов не разрешаем
Если пользователь НЕАВТОРИЗОВАН или У НЕГО НЕТ ПРАВ, то повторный запрос не делаем
Если количество попыток закончилось, то вернуть последнюю ошибку в reject
*/

/*
* @returns {Promise<unknown>}
*/

function retryFetch(url, { method = 'GET', headers }, attempts = 1) {
    return fetch(url, { method, headers })
        .then(response => {
            if (!response.ok) throw response
            return response.json();
        })
        .catch(error => {
            const allowRetry = method !== 'PUT' && ![401, 403].includes(error.status);
            if (allowRetry && attempts) {
                return retryFetch(url, { method, headers }, attempts - 1)
            } else {
                return error
                // return Promise.reject(error);
            }
        })
}

// retryFetch(url, { method: 'GET', headers: { Authorization: 'Bearer token' } }, 3);

retryFetch('https://jsonplaceholder.typicode.com/posts1/1', { method: 'GET', headers: { Authorization: 'Bearer token' } }, 3)
    .then(response => console.log('Response:', response))
    .catch(error => console.error('Error:', error));
