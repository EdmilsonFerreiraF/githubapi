import { BASE_URL } from "../constants/apiConstants"

export const goToHome = (history) => {
    history.push('/')
}

export const goToAuth = (history) => {
    history.push(`${BASE_URL}/user/login/auth`)
}

export const goToSearch = (history, username) => {
    history.push(`/search?username=${username}`)
}
  
export const goToUserDetails = (history, username) => {
    history.push(`/users/${username}`)
}
  
export const goToUserRepos = (history, username) => {
    history.push(`/users/${username}/repos`)
}
  
export const goToUserStarred = (history, username) => {
    history.push(`/users/${username}/starred`)
}