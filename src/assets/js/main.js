/* Functions */

/* Debounce: Prevent consecutive trigger */

const debounce = (callback, wait) => {
    let timerId
    return (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

/* Short - addEventListener */

/* Main.js */

window.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('is-preload'))
        document.body.classList.remove('is-preload')

    const topBar = document.querySelector('.topbar')

    window.addEventListener(
        'scroll',
        debounce((e) => {
            if (window.scrollY === 0) topBar.classList.remove('has-scroll')
            if (window.scrollY > 0) topBar.classList.add('has-scroll')
        }, 10)
    )
})
