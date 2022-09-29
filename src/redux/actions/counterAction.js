export const increment = (a=1) => {
    return {type:'increment',payload:a}
}
// here define type which define in reducer
export const decrement = () => {
    return {type :'decrement'}
}
export const reset = () => {
    return {type :'reset'}
}