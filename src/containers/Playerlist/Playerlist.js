import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import * as actions from '../../store/actions';

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

        if (!this.props.playersLoaded) {
            this.props.onInitPlayers();
        }
        
        // if(!this.state.playersLoaded) {
        //     axios.get('https://fantasyfootballcalculator.com/api/v1/adp/ppr?teams=12&year=2018')
        //     .then(response => {
        //         let updatedPlayers = [this.state.players];
        //         updatedPlayers = response.data.players;

        //         let updatedPlayersLoaded = this.state.playersLoaded;
        //         updatedPlayersLoaded = !this.state.playersLoaded;

        //         let updatedQuarterbacks = this.state.quarterbacks;
        //         updatedQuarterbacks = updatedPlayers.filter( player => player.position === "QB");

        //         let updatedWideReceivers = this.state.wideReceivers;
        //         updatedWideReceivers = updatedPlayers.filter( player => player.position === "WR");

        //         let updatedRunningBacks = this.state.runningBacks;
        //         updatedRunningBacks = updatedPlayers.filter( player => player.position === "RB");

        //         let updatedTightEnds = this.state.tightEnds;
        //         updatedTightEnds = updatedPlayers.filter( player => player.position === "TE");


        //         this.setState({
        //             players: updatedPlayers, 
        //             quarterbacks: updatedQuarterbacks, 
        //             wideReceivers: updatedWideReceivers, 
        //             runningBacks: updatedRunningBacks, 
        //             tightEnds: updatedTightEnds ,
        //             playersLoaded: updatedPlayersLoaded} 
        //         );

        //         console.log(this.state);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     }); 
        // }
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col sm={3}>
                        <h2>Overall</h2>
                        {this.props.players.map( (player, index) => (
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
                        {this.props.quarterbacks.map( (player, index) => (
                            <PlayerCard
                                key={index}
                                playerAdp={index + 1}
                                playerName={player.name}
                                playerPosition={player.position}
                                playerTeam={player.team} />
                        ))}
                    </Col>
                    <Col sm={3}>
                        <h2>WR</h2>
                        {this.props.wideReceivers.map( (player, index) => (
                            <PlayerCard
                                key={index}
                                playerAdp={index + 1}
                                playerName={player.name}
                                playerPosition={player.position}
                                playerTeam={player.team} />
                        ))}
                    </Col>
                    <Col sm={3}>
                        <h2>RB</h2>
                        {this.props.runningBacks.map( (player, index) => (
                            <PlayerCard
                                key={index}
                                playerAdp={index + 1}
                                playerName={player.name}
                                playerPosition={player.position}
                                playerTeam={player.team} />
                        ))}
                    </Col>
                    <Col sm={3}>
                        <h2>TE</h2>
                        {this.props.tightEnds.map( (player, index) => (
                            <PlayerCard
                                key={index}
                                playerAdp={index + 1}
                                playerName={player.name}
                                playerPosition={player.position}
                                playerTeam={player.team} />
                        ))}
                    </Col>
                </Row>
            </Container>    
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        quarterbacks: state.quarterbacks,
        wideReceivers: state.wideReceivers,
        runningBacks: state.runningBacks,
        tightEnds: state.tightEnds,
        playersLoaded: state.playersLoaded
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPlayers: () => dispatch(actions.initPlayers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Playerlist);