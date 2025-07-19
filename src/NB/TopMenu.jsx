import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import "./NB.style.css"
import {IoReorderThreeOutline} from "react-icons/io5";
import {IoIosNotificationsOutline} from "react-icons/io";

const TopMenu = () => {
    return (
        <div className="TopMenu">
            <Container fluid  className="topMenuBar justify-content-center NoPadding">
                <Row style={{margin: "10px 0px 10px 0px"}}>
                    <Col className="d-flex justify-content-left">
                        <Link className={"NoPadding"} to="/"><Image style={{height: '40px'}} src={"CheonanLogo.png"} alt={"천안시 로고"}/></Link>
                        <font>홍길동님</font>
                    </Col>
                    <Col className="d-flex justify-content-end NoPadding">
                        <Link to="/"><IoIosNotificationsOutline size={"25"}/></Link>
                        <Link to="/"><IoReorderThreeOutline size={"25"} /></Link>
                    </Col>
                </Row>
            </Container>
            <Outlet/>
        </div>
    );
};

export default TopMenu;