import React, { Component } from 'react';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import axios from 'axios';

import PlayerCard from '../../components/Player/PlayerCard/PlayerCard';
import './Playerlist.css';

class Playerlist extends Component {
    constructor (props) {
        super(props);
        setConfiguration({
            gridColumns: 15
        });
    }

    state = {
        players: [],
        quarterbacks: [],
        wideReceivers: [],
        runningBacks: [],
        tightEnds: [],
        playersLoaded: false
    }

    componentDidMount () {
        
        if(!this.state.playersLoaded) {
            axios.get('https://fantasyfootballcalculator.com/api/v1/adp/ppr?teams=12&year=2018')
            .then(response => {
                let updatedPlayers = [this.state.players];
                updatedPlayers = response.data.players;
                let updatedPlayersLoaded = this.state.playersLoaded;
                updatedPlayersLoaded = !this.state.playersLoaded;
                let updatedQuarterbacks = this.state.quarterbacks;
                updatedQuarterbacks = updatedPlayers.filter( player => player.position === "QB");

                this.setState( {players: updatedPlayers, quarterbacks: updatedQuarterbacks, playersLoaded: updatedPlayersLoaded} );
                console.log(this.state);
            })
            .catch(error => {
                console.log(error);
            }); 
        }
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col sm={3}>
                        <h2>Overall</h2>
                        {this.state.players.map( (player, index) => (
                            <PlayerCard 
                                key={index}
                                playerAdp={index + 1}
                                playerName={player.name}
                                playerPosition={player.position}
                                playerTeam={player.team} />
                        ))}
                    </Col>
                    <Col sm={3}>
                        <h2>QB</h2>
                        {this.state.quarterbacks.map( (player, index) => (
                            <PlayerCard
                                key={index}
                                playerAdp={index + 1}
                                playerName={player.name}
                                playerPosition={player.position}
                                playerTeam={player.team} />
                        ))}
                    </Col>
                    <Col sm={3}><h2>WR</h2></Col>
                    <Col sm={3}><h2>RB</h2></Col>
                    <Col sm={3}><h2>TE</h2></Col>
                </Row>
            </Container>    
        );
    }
}

export default Playerlist;