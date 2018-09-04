import React from 'react';

import classes from './PlayerCard.css';

const playerCard = (props) => {
    return (
            <div className={classes.PlayerCard}>
                <p>{props.playerAdp} {props.playerName} {props.playerPosition} {props.playerTeam}</p>
            </div>
    ); 
};

export default playerCard;