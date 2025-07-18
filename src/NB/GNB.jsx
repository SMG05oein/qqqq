import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./NB.style.css"
import {CiHome, CiMap} from "react-icons/ci";
import {IoPersonOutline} from "react-icons/io5";

const Gnb = () => {
    return (
        <div className="NB">
            <Container fluid  className="GNB justify-content-center">
                <Row style={{margin: "10px 0px 10px 0px"}}>
                    <Col className="d-flex justify-content-center">
                        <Link to="/">천안사랑카드</Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link to="/"><CiMap />가맹정 지도</Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link to="/"><CiHome/>홈</Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link to="/">소식</Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link to="/"><IoPersonOutline />프로필</Link>
                    </Col>
                </Row>
            </Container>
        </div>
);
};

export default Gnb;