const parent = document.querySelector('.team .body')
const children = parent.querySelector('.person')

let startX
let scrollLeft
let isDown

export function initScroll() {
    parent.addEventListener('mousedown', (e) => mouseIsDown(e))
    parent.addEventListener('mouseup', (e) => mouseUp(e))
    parent.addEventListener('mouseleave', (e) => mouseLeave(e))
    parent.addEventListener('mousemove', (e) => mouseMove(e))

    document.querySelector('.next-person').onclick = (event) => {
        handleNavegation(1)
    }
    document.querySelector('.prev-person').onclick = (event) => {
        handleNavegation(-1)
    }
}

const childrenSize = () => {
    return (
        children.clientWidth +
        Number(
            window
                .getComputedStyle(children)
                .margin.split(' ')[1]
                .replace('px', '')
        ) *
            2
    )
}

function handleNavegation(x) {
    if (x > 0) {
        parent.scrollBy(childrenSize(), 0)
    } else {
        parent.scrollBy(-childrenSize(), 0)
    }
}

function mouseIsDown(e) {
    isDown = true
    startX = e.pageX - parent.offsetTop
    scrollLeft = parent.scrollLeft
}
function mouseUp(e) {
    isDown = false
    parent.classList.remove('active')
}
function mouseLeave(e) {
    isDown = false
    parent.classList.remove('active')
}
function mouseMove(e) {
    if (isDown) {
        //Move horizontally
        const x = e.pageX - parent.offsetTop
        const walkX = (x - startX) * 2
        parent.scrollLeft = scrollLeft - walkX
        parent.classList.add('active')
    } else {
        parent.classList.remove('active')
    }
}
