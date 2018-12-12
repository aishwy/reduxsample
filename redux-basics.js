const redux = require('redux');
const initialState = {counter:0};

//Reducer
const reducer = (state = initialState,action)=>{
    if(action.type=="INC_COUNTER") {
        return {
            ...initialState,
            counter: state.counter+1
        }
    }
    if(action.type=="ADD_COUNTER") {
        return {
            ...initialState,
            counter: state.counter+action.payload.value
        }
    }
    return state;
}

//Store
const store = redux.createStore(reducer);

//subscription
store.subscribe(()=>{
    console.log('SUBS',store.getState());
})

//Action
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',payload:{value:10}});

