import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initPlayers = () => {
    return dispatch => {
        axios.get('https://fantasyfootballcalculator.com/api/v1/adp/ppr?teams=12&year=2018')
            .then(response => {
                dispatch(setPlayers( response.data) );
                console.log(this.state);
            })
            .catch(error => {
                console.log(error);
            }); 
    }
};

export const setPlayers = ( players ) => {
    return {
        type: actionTypes.SET_PLAYERS,
        players: players
    };
};
