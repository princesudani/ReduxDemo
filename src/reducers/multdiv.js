const initialState = 5;

const othernumber = (state = initialState, action) => {
    switch(action.type){
        case "MULTIPICATION" : return state * 5;
        case "DIVISION" : return state / 5;
        default : return state;
    }
}

export default othernumber;