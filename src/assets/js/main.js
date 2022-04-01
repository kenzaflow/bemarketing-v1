import { initScroll } from './modules/scroll'
import { initForm } from './modules/form'
import { debounce } from './modules/functions'

/* Short - addEventListener */

/* Main.js */

function startDebugging() {
    if (localStorage.getItem('outline') !== null) {
        document.body.setAttribute('outline', '')
    }

    window.addEventListener('keydown', (event) => {
        /* if (event.key === 'o' && event.ctrlKey) {
            event.preventDefault()
            document.body.toggleAttribute('outline')
            if (document.body.hasAttribute('outline')) {
                localStorage.setItem('outline', '')
            } else {
                localStorage.removeItem('outline')
            }
        } */
        /* if (event.key === 'd' && event.ctrlKey) {
            let root = document.documentElement
            event.preventDefault()
            if (
                root.style.getPropertyValue('--palette-background') ===
                    '#0a0a0a' ||
                root.style.getPropertyValue('--palette-background') === ''
            ) {
                root.style.setProperty('--palette-background', '#0a0a0a')
            } else {
                root.style.setProperty('--palette-background', '#000')
            }
        } */
    })
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
                document.body.classList.remove('has-scroll')
            if (window.scrollY > 0)
                document.body.classList.add('has-scroll', 'no-scroll-animation')
        }, 10)
    )

    initForm()
    initScroll()
})
