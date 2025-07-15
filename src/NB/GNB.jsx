import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Outlet} from "react-router-dom";

const Gnb = () => {
    return (
        <div>
            <Container className="justify-content-center">
                <Row style={{margin: "10px 0px 10px 0px"}}>
                    <Col className="d-flex justify-content-center">
                        가맹점 확인
                    </Col>
                    <Col className="d-flex justify-content-center">
                        착한 가게
                    </Col>
                    <Col className="d-flex justify-content-center">
                        ~~ 확인
                    </Col>
                    <Col className="d-flex justify-content-center">
                        ~~ 확인
                    </Col>
                </Row>
            </Container>
            <Outlet/>
        </div>
);
};

export default Gnb;