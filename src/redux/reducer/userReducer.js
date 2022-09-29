export function userReducer(state = [], action) {
    switch (action.type) {
        case 'addNewUser': {
            return [...state, action.payload]
        }
        case 'editUser': {
            const result = state.map((item) => {
                if (item.id === action.payload.id) {
                    // console.log('first', action.payload)
                    return { ...item, name: action.payload.name, email: action.payload.email }
                } else {
                    return item;
                }
            })
            return result;
        }
        case 'deleteUser': {
            const result = state.filter((item) =>  item.id !== action.payload)
            return result;
        }
        default: {
            return [...state]
        }
    }
}