export const getFirstName = state => {
    return state.profile.user.firstName
}

export const getLastName = state => {
    return state.profile.user.lastName
}

export const getUserName = state => {
    return state.profile.user.userName
}

export const getAvatar = state => {
    return state.profile.user.avatar
}

export const getTelephone = state => {
    return state.profile.user.telephone
}

export const getDiscription = state => {
    return state.profile.user.discription
}

export const grtOnline = state => {
    return state.profile.user.online
}