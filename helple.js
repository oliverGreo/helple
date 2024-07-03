function handleKeydown(event) {
    if (event.key === ' ') {
        event.preventDefault()
        const nextModeDiv = document.querySelector('.next-mode')
        if (nextModeDiv) {
            nextModeDiv.click()
        }
        const inputField = document.querySelector('input[type="text"]')
        if (inputField) {
            inputField.focus()
        }
    }
}

document.addEventListener('keydown', handleKeydown)