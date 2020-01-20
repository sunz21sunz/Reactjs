const taskListReducer = (state=[], action) => {
    switch(action.type){
        case 'ADDTASKACTION' : {
            state = [...state, action.payload];
            return state;
        }
        default:  return state;
    }
};

export default taskListReducer;