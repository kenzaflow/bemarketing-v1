import { initScroll } from './modules/scroll'
import { initForm } from './modules/form'
import { debounce } from './modules/functions'

/* Short - addEventListener */

/* Main.js */

window.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('is-preload'))
        document.body.classList.remove('is-preload')

    window.addEventListener('keydown', (event) => {
        if (event.key === 'o') {
            document.body.toggleAttribute('outline')
        }
    })

    window.addEventListener('click', (event) => {
        if (
            document
                .querySelector('.wrapper')
                .classList.contains('viewingStatus')
        )
            return null
        if (
            document.querySelector('.menu-opener').checked &&
            event.target !== document.querySelector('.menu-opener')
        ) {
            document.querySelector('.menu-opener').checked = false
        }
    })

    window.addEventListener(
        'scroll',
        debounce((e) => {
            if (window.scrollY === 0)
                document.body.classList.remove('has-scroll')
            if (window.scrollY > 0)
                document.body.classList.add('has-scroll', 'no-scroll-animation')
        }, 10)
    )

    initForm()
    initScroll()
})
