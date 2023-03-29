const { default: axios } = require("axios");
const { createStore,  applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk").default;

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const ADD_USERS_DATA = 'ADD_USERS_DATA';
const ADD_ERROR_RESPONSE = 'ADD_ERROR_RESPONSE';

let initialState = {
    users : [],
    loading : true,
    error : null
}

let fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}
let addUsersData = (users) => {
    return {
        type : ADD_USERS_DATA,
        payload : users
    }
}
let addErrorResponse = (err) => {
    return {
        type : ADD_ERROR_RESPONSE,
        payload : err
    }
}

let fetchUsers =  () => {
    //thunk middleware allow us to return function instead of action object
    return async (dispatch) => {
        try {
            dispatch(fetchUsersRequest());
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            const users = res.data.map(u => u.name);
            dispatch(addUsersData(users));
        }catch(e) {
            dispatch(addErrorResponse(e.message));
        }
    }
}


let reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST : 
            return {...state,loading : true}
        case ADD_USERS_DATA : 
            return { users: action.payload, loading : false, error : null }
        case ADD_ERROR_RESPONSE : 
            return { users: [], loading : false, error : action.payload }
    }
}

let store = createStore(reducer,applyMiddleware(thunkMiddleware))

let unsubscribe = store.subscribe(() => {console.log(store.getState())})

store.dispatch(fetchUsers())
// unsubscribe(); // this can stop listening state update event while it's fetching data