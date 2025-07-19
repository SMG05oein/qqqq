import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./NB.style.css"
import {CiHome, CiMap} from "react-icons/ci";
import {IoPersonOutline} from "react-icons/io5";
import {GoCreditCard} from "react-icons/go";
import {BsColumns} from "react-icons/bs";

const Gnb = ({isProfile}) => {
    return (
        <div className="NB">
            <Container fluid style={{borderRadius: isProfile ? '0px' : '50px 50px 0 0'}}  className="GNB justify-content-center">
                {isProfile ? null :
                    <div style={{cursor:"pointer"}} onClick={()=>{alert("기능 미구현")}} className="PayingBar">
                        <div className={"Paying"}>결제하기</div>
                    </div>
                }
                <Row style={{margin: "10px 0px 10px 0px"}}>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Link to="/cheonancard"><GoCreditCard /><br/>천안<br/>사랑카드</Link>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Link to="map"><CiMap /><br/>가맹점<br/> 지도</Link>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Link to="/"><CiHome/><br/>홈</Link>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Link to="/"><BsColumns /><br/>커뮤니티</Link>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Link to="/profile"><IoPersonOutline /><br/>프로필</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gnb;