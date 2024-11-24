// 4

/*
на каждый клик на кнопку
1) показать на экране картинку размером 500 x 150, доступной по ссылке “https://random.imagecdn.app/500/150.jpg”
2) при повторном клике должна показаться новая картинка вместо старой
3) до момента загрузки показывать плейсхолдер размером с картинку (например, прямоугольник 500 x 150 зеленого цвета)
4) в случае ошибки загрузки показать плейсхолдер ошибки (например, прямоугольник 500 x 150 красного цвета)
5) в случае успешной загрузки нужно вывести console.log с текстом, что картинка загрузилась

<main>
<div id="image-container"></div>
<button id="image-loading-button">
    Load Image
</button>
</main>

*/

const imageContainer = document.querySelector('#image-container')
const button = document.querySelector('#image-loading-button')

button.addEventListener('click', () => {
    const currentImg = document.querySelector('img')
    const image = document.createElement('img')
    image.src = 'https://random.imagecdn.app/500/150'
    image.width = 500
    image.height = 150
    image.style.backgroundColor = 'green'
    image.alt = 'image'
    image.onerror = (e) => image.style.backgroundColor = 'red'
    image.onload = (e) => console.log('картинка загрузилась')

    if (currentImg) {
        imageContainer.replaceChild(image, currentImg)
    } else {
        imageContainer.appendChild(image)
    }

})
