import React, { Component } from 'react';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import Playerlist from '../../containers/Playerlist/Playerlist';
import DraftManager from '../../containers/DraftManager/DraftManager';

class Layout extends Component {
    constructor (props) {
        super(props);
        setConfiguration({
            containerWidths: [540, 750, 960, 1600]
        });
    }

    render () {
        return (
            <Container>
                <Row justify="center">
                    <Col sm={8}>DraftBoard</Col>
                    <Col sm={4}>Team Preview</Col>
                </Row>
                <Row justify="center">
                    <Col sm={6}>
                        <DraftManager />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col sm={12}>
                        <Playerlist />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Layout;