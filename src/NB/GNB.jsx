import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./NB.style.css"
import {CiHome, CiMap} from "react-icons/ci";
import {IoPersonOutline} from "react-icons/io5";

const Gnb = ({isProfile}) => {
    return (
        <div className="NB">
            {isProfile ? null :
                <div style={{cursor:"pointer"}} onClick={()=>{alert("기능 미구현")}} className="PayingBar">
                    <div className={"Paying"}>결제하기</div>
                </div>
            }
            <Container fluid  className="GNB justify-content-center">
                <Row style={{margin: "10px 0px 10px 0px"}}>
                    <Col className="d-flex justify-content-center">
                        <Link to="/cheonancard">천안사랑카드</Link>
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
                        <Link to="/profile"><IoPersonOutline />프로필</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gnb;