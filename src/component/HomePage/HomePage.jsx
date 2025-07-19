import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./HomePage.style.css"

const HomePage = () => {
    return (
        <div className="HomePage justify-content-center">
            <Container>
                {/*관리*/}
                <Row className={"NotFlex"}>
                    <div className={"HomeBox"}>
                        <Row>
                            <Col>잔액: 1000원</Col>
                        </Row>
                        <Row>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                        </Row>
                    </div>
                </Row>

                {/*지불 방식*/}
                <Row className={"NotFlex"}>
                    <div className={"HomeBox"}>
                        <Row>
                            <Col>잔액: 1000원</Col>
                        </Row>
                        <Row>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                        </Row>
                    </div>
                </Row>

                {/*빠른 결제*/}
                <Row className={"NotFlex"}>
                    <div className={"HomeBox"}>
                        <Row>
                            <Col>잔액: 1000원</Col>
                        </Row>
                        <Row>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                        </Row>
                    </div>
                </Row>

                {/*/!*서비스 버로가기*!/*/}
                <Row className={"NotFlex"}>
                    <div className={"HomeBox"}>
                        <Row>
                            <Col>잔액: 1000원</Col>
                        </Row>
                        <Row>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                        </Row>
                    </div>
                </Row>


                <Row className={"NotFlex"}>
                    <div className={"HomeBox"}>
                        <Row>
                            <Col>잔액: 1000원</Col>
                        </Row>
                        <Row>
                            <Col><Link to={"/"}>이용내역</Link></Col>
                            <Col><Link to={"/"}>충전</Link></Col>
                        </Row>
                    </div>
                </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row><Row className={"NotFlex"}>
                <div className={"HomeBox"}>
                    <Row>
                        <Col>잔액: 1000원</Col>
                    </Row>
                    <Row>
                        <Col><Link to={"/"}>이용내역</Link></Col>
                        <Col><Link to={"/"}>충전</Link></Col>
                    </Row>
                </div>
            </Row>
            </Container>
        </div>
    );
};

export default HomePage;