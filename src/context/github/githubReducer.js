import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){

        case GET_REPOS:
            return{
                ...state,
                repos: action.payload,
                loading:false
            }

        case GET_USERS:
            return {
                ...state,
                user: action.payload,
                loading:false
            }

        case CLEAR_USERS:
            return {
                ...state,
                users:[],
                loading:false
            }

        case SEARCH_USERS:
            return{
                ...state,
                users: action.payload,
                loading:false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}