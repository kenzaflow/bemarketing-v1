const children = document.querySelectorAll('.scroll-snap-children')
const parent = document.querySelector('.scroll-snap-parent')

let startX
let scrollLeft
let isDown

export function initScroll() {
    parent.addEventListener('mousedown', (e) => mouseIsDown(e))
    parent.addEventListener('mouseup', (e) => mouseUp(e))
    parent.addEventListener('mouseleave', (e) => mouseLeave(e))
    parent.addEventListener('mousemove', (e) => mouseMove(e))

    parent.onwheel = (event) => {
        parent.scrollBy(0, event.deltaX)
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
        e.preventDefault()
        //Move horizontally
        const x = e.pageX - parent.offsetTop
        const walkX = (x - startX) * 2
        parent.scrollLeft = scrollLeft - walkX
        parent.classList.add('active')
    } else {
        parent.classList.remove('active')
    }
}
