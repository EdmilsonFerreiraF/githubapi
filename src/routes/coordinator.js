export const goToHome = (history) => {
    history.push('/')
}

export const goToAuth = (history) => {
    history.push('http://localhost:3003/user/login/auth')
}

export const goToSearch = (history, query) => {
    history.push(`/search?query=${query}`)
}