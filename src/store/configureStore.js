import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    characters: []
}

const reducer = (state=initialState, action) => {
    if(action.type === 'GET_CHARACTERS') {
        return {
            ...state,
            characters: action.characters
        }
    }
    return state;
};

export default createStore(reducer, applyMiddleware(thunk));