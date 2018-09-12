import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import classes from './DraftManager.css';
import Button from '../../components/UI/Button/Button';

class DraftManager extends Component {
    render () {
        return (
            <Container className={classes.DraftManager}>
                <Row align="center" justify="center">
                    <Col sm={10}><p>Todd Gurley RB - PIT</p></Col>
                    <Col sm={2}><Button>DRAFT</Button></Col>
                </Row>
            </Container>
        );
    }
}

export default DraftManager