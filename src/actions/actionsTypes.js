import axios from 'axios';
const API_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = () => {
    return dispatch => {
        return axios.get(API_URL)
            .then(response => {
                dispatch({ type: "GET_CHARACTERS", characters: response.data.results });
        });
    };
};