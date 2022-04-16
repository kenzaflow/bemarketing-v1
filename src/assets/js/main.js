import { initScroll } from './modules/scroll'
import { initForm } from './modules/form'
import { debounce } from './modules/functions'

/* Short - addEventListener */

/* Main.js */

function startDebugging() {
    if (localStorage.getItem('outline') !== null) {
        document.body.setAttribute('outline', '')
    }
}

window.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('is-preload'))
        document.body.classList.remove('is-preload')

    startDebugging()

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
                document.body.classList.remove('has-scroll', 'no-scroll-animation')
            if (window.scrollY > 0)
                document.body.classList.add('has-scroll', 'no-scroll-animation')
        }, 10)
    )

    initForm()
    initScroll()
})
