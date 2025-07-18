import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import "./NB.style.css"
import {IoReorderThreeOutline} from "react-icons/io5";
import {IoIosNotificationsOutline} from "react-icons/io";

const TopMenu = () => {
    return (
        <div className="TopMenu">
            <Container fluid  className="topMenuBar justify-content-center">
                <Row style={{margin: "10px 0px 10px 0px"}}>
                    <Col className="d-flex justify-content-left">
                        <Link to="/">로고</Link>
                        <font>홍길동님</font>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Link to="/"><IoIosNotificationsOutline /></Link>
                        <Link to="/"><IoReorderThreeOutline /></Link>
                    </Col>
                </Row>
            </Container>
            <Outlet/>
        </div>
    );
};

export default TopMenu;