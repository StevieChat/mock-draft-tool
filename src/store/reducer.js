import * as actionTypes from './actionTypes';
import { setPlayers } from './actions';

const initialState = {
    players: [],
    quarterbacks: [],
    wideReceivers: [],
    runningBacks: [],
    tightEnds: [],
    playersLoaded: false
};

const setPlayerLists = ( state, action ) => {

    let updatedPlayers = [state.players];
    updatedPlayers = action.players.players;

    let updatedPlayersLoaded = state.playersLoaded;
    updatedPlayersLoaded = !state.playersLoaded;

    let updatedQuarterbacks = state.quarterbacks;
    updatedQuarterbacks = updatedPlayers.filter( player => player.position === "QB");

    let updatedWideReceivers = state.wideReceivers;
    updatedWideReceivers = updatedPlayers.filter( player => player.position === "WR");

    let updatedRunningBacks = state.runningBacks;
    updatedRunningBacks = updatedPlayers.filter( player => player.position === "RB");

    let updatedTightEnds = state.tightEnds;
    updatedTightEnds = updatedPlayers.filter( player => player.position === "TE");


    return {
        players: updatedPlayers, 
        quarterbacks: updatedQuarterbacks, 
        wideReceivers: updatedWideReceivers, 
        runningBacks: updatedRunningBacks, 
        tightEnds: updatedTightEnds ,
        playersLoaded: updatedPlayersLoaded
    };
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.SET_PLAYERS: return setPlayerLists( state, action );
        default: return state;
    }
};

export default reducer;