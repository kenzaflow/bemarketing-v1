export function initScroll() {
    const types = ['mousedown', 'mouseup', 'mouseleave', 'mousemove']

    const parent = document.querySelectorAll('.cards.scroll-snap-parent')

    parent.forEach((element) => {
        types.forEach((type) => {
            element.addEventListener(type, (event) =>
                handleMouseEvent(event, type, element)
            )
        })
    })

    /* document.querySelector('.next-person').onclick = (event) => {
        handleNavegation(1)
    }
    document.querySelector('.prev-person').onclick = (event) => {
        handleNavegation(-1)
    } */
}

let startX
let scrollLeft
let isDown

function handleMouseEvent(event, type, element) {
    if (type === 'mousedown') {
        isDown = true
        startX = event.pageX - element.offsetTop
        scrollLeft = element.scrollLeft
    }
    if (type === 'mouseleave' || type === 'mouseup') {
        isDown = false
        element.classList.remove('active')
    }
    if (type === 'mousemove') {
        if (isDown) {
            //Move horizontally
            const x = event.pageX - element.offsetTop
            const walkX = (x - startX) * 2
            element.scrollLeft = scrollLeft - walkX
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
    }
}

/* const childrenSize = () => {
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
} */

/* function handleNavegation(x) {
    if (x > 0) {
        parent.scrollBy(childrenSize(), 0)
    } else {
        parent.scrollBy(-childrenSize(), 0)
    }
} */
