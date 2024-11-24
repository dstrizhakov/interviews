const imageContainer = document.getElementById('image-container');
const button = document.getElementById('image-loading-button');
const images = document.getElementsByTagName('img');
// методы getElements

button.addEventListener('click', (event) => {
    const current = imageContainer.querySelector('img');

    const image = document.createElement('img');
    image.src = 'https://random.imagecdn.app/500/150'
    image.width = 500;
    image.height = 150;
    image.alt = 'Картинка';
    image.dataset.name = 'image'
    image.classList.add('image')
    image.style.backgroundColor = 'green';
    image.addEventListener('error', () => {
        image.style.backgroundColor = 'red';
        console.log('Ошибка загрузки!!!')
    })
    image.addEventListener('load', () => {
        console.log('Картинка загружена!!!')
        console.log('Всего картинок: ', images?.length)
    })

    if (current) {
        imageContainer.replaceChild(image, current);
        // imageContainer.append(image)
    } else {
        imageContainer.appendChild(image)
    }
})