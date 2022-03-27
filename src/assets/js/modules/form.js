const section = document.createElement('section')

function showStatus({ title = '', text = '' }) {
    const intervalID = setInterval(() => {
        if (
            section.querySelector('#statusTitle') != null &&
            section.querySelector('#statusText') != null
        ) {
            clearInterval(intervalID)
            section.querySelector('#statusTitle').innerHTML = title
            section.querySelector('#statusText').innerHTML = text
        }
    }, 100)
}

const handleClose = () => {
    document.querySelector('#menu-opener').checked = false
    document.querySelector('.wrapper').classList.remove('viewingStatus')
    document.querySelector('.wrapper').removeChild(section)
    document
        .querySelector('#menu-opener')
        .removeEventListener('click', handleClose)
}

function initStatus() {
    section.id = 'statusForm'
    section.classList.add('statusForm')
    section.innerHTML = `<div class="content">
                            <p id="statusTitle" class="font-size:h2 font:heading"></p>
                            <br class="size:2">
                            <p id="statusText" class="font-size:h4 font:heading"></p>
                        </div>`
    document.querySelector('.wrapper').appendChild(section)
    document.querySelector('.wrapper').classList.add('viewingStatus')
    document.querySelector('#menu-opener').checked = true

    document
        .querySelector('#menu-opener')
        .addEventListener('click', handleClose)
}

export function initForm() {
    const form = document.getElementById('formspree')

    if (!form) return null

    async function handleSubmit(event) {
        event.preventDefault()

        initStatus()

        const data = new FormData(event.target)

        fetch(event.target.action, {
            method: form.method,
            method: 'GET',
            body: data,
            headers: {
                Accept: 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    showStatus({
                        title: 'Recibimos tu mensaje',
                        text: 'Muy pronto te responderemos. Gracias por elegirnos.',
                    })
                    form.reset()
                } else {
                    showStatus({
                        title: 'Ups!',
                        text: 'No pudimos enviar tu mensaje, contactanos por otro medio!',
                    })
                    response.json().then((data) => {
                        if (Object.hasOwn(data, 'errors')) {
                            // error with description
                            /* console.log(
                                data['errors']
                                    .map((error) => error['message'])
                                    .join(', ')
                            ) */
                        } else {
                            // error without description, show generic error
                        }
                    })
                }
            })
            .catch((error) => {
                showStatus({
                    title: 'Ups!',
                    text: 'No pudimos enviar tu mensaje, contactanos por otro medio!',
                })
            })
    }

    form.addEventListener('submit', handleSubmit)
}
