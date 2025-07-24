import React, {useContext} from 'react';
import {PayingBarOpenContext} from "../../State/PayingBarOpenState";
import {Col, Container, Row} from "react-bootstrap";

const GnbPayingBarLoginT = () => {
    const {isOpen} = useContext(PayingBarOpenContext);

    return (
        <div style={{display: `${isOpen ? 'flex' : 'none'}`}}>
            <Container fluid>
                <Row>
                    <Col>로그인 후</Col>
                </Row>
            </Container>
        </div>
    );
};

export default GnbPayingBarLoginT;