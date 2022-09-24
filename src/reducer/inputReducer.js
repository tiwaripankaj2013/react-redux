// initial state and action
export function inputReducer(state = [], action) {
    switch (action.type) {
        case 'addNewNumber': {
            return [...state, action.payload]
        }

        case 'inputIncrement': {
            const result = state.map((item) => {
                if (item.id == action.payload) {
                    return { ...item, value: Number(item.value) + 1 }
                } else {
                    return item;
                }
            })
            return result
        }

        case "inputDecrement": {
            const result = state.map(item => {
                if (item.id == action.payload) {
                    return { ...item, value: Number(item.value) - 1 }
                } else {
                    return item;
                }
            })
            return result;
        }

        case "inputDelete": {
            const result = state.filter(item => item.id != action.payload);
            return result;
        }

        case 'removeAll': {
            return []
        }

        default: {
            return [...state]
        }

    }
}