export const addNewNumber = (inputValue) => {
    // payload to pass extra data to reducers
    return { type: 'addNewNumber', payload: inputValue }
}

export const inputIcrement = (id) => {
    return {
        type: 'inputIncrement', payload: id
    }
}

export const inputDecrement = (id) => {
    return {
        type: "inputDecrement",
        payload: id,
    }
}

export const inputDelete = (id) => {
    return {
        type: 'inputDelete',
        payload: id
    }
}
export const removeAll = () => {
    return {
        type:'removeAll',
    }
}