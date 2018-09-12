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

    componentDidMount () {
        if (!this.props.playersLoaded) {
            this.props.onInitPlayers();
        }
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