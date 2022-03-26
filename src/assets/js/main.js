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

const initForm = () => {
    let form = document.getElementById('my-form')

    if (!form) return null

    async function handleSubmit(event) {
        event.preventDefault()
        let status = document.getElementById('my-form-status')
        let data = new FormData(event.target)
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    status.innerHTML = 'Thanks for your submission!'
                    form.reset()
                } else {
                    response.json().then((data) => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data['errors']
                                .map((error) => error['message'])
                                .join(', ')
                        } else {
                            status.innerHTML =
                                'Oops! There was a problem submitting your form'
                        }
                    })
                }
            })
            .catch((error) => {
                status.innerHTML =
                    'Oops! There was a problem submitting your form'
            })
    }

    form.addEventListener('submit', handleSubmit)
}

/* Short - addEventListener */

/* Main.js */

window.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('is-preload'))
        document.body.classList.remove('is-preload')

    window.addEventListener('click', (event) => {
        if (
            document.querySelector('.menu-opener').checked &&
            event.target !== document.querySelector('.menu-opener')
        ) {
            document.querySelector('.menu-opener').checked = false
        }
    })

    const topBar = document.querySelector('.topbar')

    window.addEventListener(
        'scroll',
        debounce((e) => {
            if (window.scrollY === 0) topBar.classList.remove('has-scroll')
            if (window.scrollY > 0) topBar.classList.add('has-scroll')
        }, 10)
    )

    initForm()
})
