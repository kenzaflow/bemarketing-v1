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

    const headerTag = document.getElementsByTagName('header')[0]

    window.addEventListener(
        'scroll',
        debounce((e) => {
            if (window.scrollY === 0)
                headerTag.classList.remove('border-bottom')
            if (window.scrollY > 0) headerTag.classList.add('border-bottom')
        }, 10)
    )
})
