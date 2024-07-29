export const plus = (num) => {
    return{
        type: "INCREMENT",
        payload: num
    }
}

export const minus = () => {
    return{
        type: "DECREMENT"
    }
}

export const mult = (num) => {
    return{
        type: "MULTIPICATION",
        payload: num
    }
}

export const divide = () => {
    return{
        type: "DIVISION"
    }
}