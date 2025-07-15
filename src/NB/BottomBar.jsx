import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const BottomBar = () => {
    return (
        <div>
            <Container>
                <Row style={{margin: "10px 0px 10px 0px"}}>
                    <Col className="d-flex justify-content-center">
                        지도
                    </Col>
                    <Col className="d-flex justify-content-center">
                        결재
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BottomBar;