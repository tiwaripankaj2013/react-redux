export function counterReducer(state = 0, action){
    switch(action.type){
        case 'increment':
            return  state + action.payload
        case 'decrement':
            return state - 1
        case 'reset':
        return state  = 0
        default :
        return state
    }
};