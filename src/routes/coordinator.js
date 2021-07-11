export const goToHome = (history) => {
    history.push('/')
}

export const goToAuth = (history) => {
    history.push('http://localhost:3003/user/login/auth')
}

export const goToSearch = (history, username) => {
    history.push(`/search?username=${username}`)
}
  
export const goToSearchDetails = (history, username) => {
    history.push(`/users/${username}`)
}
  
export const goToSearchItemRepositories = (history, username) => {
    history.push(`/users/${username}/repos`)
}
  
export const goToSearchItemStarred = (history, username) => {
    history.push(`/users/${username}/starred`)
}