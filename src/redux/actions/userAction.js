export const addNewUser = (userData) => {
    // payload to pass extra data to reducers
    return { type: 'addNewUser', payload: userData }
}
export const editUser = (id) => {
    // payload to pass extra data to reducers
    return { type: 'editUser', payload: id }
}
export const deleteUser = (id) => {
    // payload to pass extra data to reducers
    return { type: 'deleteUser', payload: id }
}