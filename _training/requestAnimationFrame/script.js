const animationBox = document.querySelector(".box_for_animation");
const animationButton = document.querySelector(".button_for_animation");

let animationStart;
let requestId;

function animate(timestamp) {
    if (!animationStart) {
        animationStart = timestamp;
    }

    const progress = timestamp - animationStart;

    animationBox.style.transform = `translateX(${progress / 5}px)`;

    const x = animationBox.getBoundingClientRect().x + 100;

    // 6px - scrollbar width
    if (x <= window.innerWidth - 6) {
        window.requestAnimationFrame(animate);
    } else {
        window.cancelAnimationFrame(requestId);
    }
}

function startAnimation() {
    requestId = window.requestAnimationFrame(animate);
    animationButton.style.opacity = 0;
}

animationButton.addEventListener("click", startAnimation, { once: true });

// scroll
const scrollMessage = document.querySelector(".message_for_scroll");
const scrollBox = document.querySelector(".box_for_scroll");

function showMessage() {
    if (!scrollMessage.textContent) {
        scrollMessage.textContent = "scrollBox is in viewport";
        scrollMessage.style.opacity = 1;
    }
}

function onScroll() {
    const { top, bottom } = scrollBox.getBoundingClientRect();

    if (top < window.scrollY && bottom > 0) {
        window.requestAnimationFrame(showMessage);
    } else if (scrollMessage.textContent) {
        scrollMessage.style.opacity = 0;
        const timerId = setTimeout(() => {
            scrollMessage.textContent = "";
            clearTimeout(timerId)
        }, 500);
    }
}

window.addEventListener("scroll", onScroll);