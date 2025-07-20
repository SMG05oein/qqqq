import React, {useState} from 'react';
import {Button, Col, Container, Image, Row, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./HomePage.style.css"
import {FaCreditCard, FaPlus, FaWonSign} from "react-icons/fa";

const HomePage = () => {
    const data = [
        { type: "지출", amount: "1000원", date: "2025-01-03" },
        { type: "충전", amount: "1000원", date: "2025-01-03" },
        { type: "지출", amount: "1000원", date: "2025-01-03" },
        { type: "지출", amount: "1000원", date: "2025-01-03" },
        { type: "충전", amount: "1000원", date: "2025-01-03" },
        { type: "지출", amount: "1000원", date: "2025-01-03" },
        { type: "지출", amount: "1000원", date: "2025-01-03" },
    ];

    const [visibleCount, setVisibleCount] = useState(3);

    const showMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, data.length));
    };
    const showAll = () => {
        setVisibleCount(data.length);
    };
    const resetView = () => {
        setVisibleCount(3);
    };

    return (
        <div className="HomePage">
            <Container>
                <Row>
                    <div className={"Banner"}>
                        <Col xs={8}><span>사용이 처음이신가요?</span></Col>
                        <Col xs={4}><div onClick={()=>{alert("기능 미구현")}} className={"GuideBox"}>가이드 <br/>보러가기</div></Col>
                    </div>
                </Row>
                {/*관리*/}
                <Row className={"NotFlex"}>
                    <div className={"HomeCardBanner"}>
                        <Row className={""} style={{marginBottom: "10px"}}>
                            <Col xs={5} className={"d-flex justify-content-center align-content-center"}>
                                <Image height={'160px'} src={"CheonanLoveCard.png"} alt={"천안사랑카드"}/>
                            </Col>
                            <Col xs={7} className={"d-block justify-content-center align-content-center"}>
                                <div className={"MyCheonanCard"}>나의 천안 사랑카드</div>
                                <div className={"CardInfo"}>
                                    <div className={"Money"}>
                                        <div className={"SeeMoney"}>
                                            <div>잔액</div>
                                            <div>{Number(1000000000000000000000000000000).toLocaleString()}원</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"MoreBtn"}><FaPlus/>&nbsp;더보기</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"d-flex justify-content-center align-content-center"}><Link to={"/"}><FaCreditCard/> 카드관리</Link></Col>
                            <Col className={"d-flex justify-content-center align-content-center"}><Link to={"/"}><FaWonSign/> 충전</Link></Col>
                        </Row>
                    </div>
                </Row>

                {/*지불 방식*/}
                <Row className={"NotFlex"}>
                    <div className={"HomeBox"}>
                        <Row>
                            <Col>이용내역</Col>
                        </Row>
                        <Row className={"NotFlex"}>
                            <Table className={"NoMargin"} variant={""} striped bordered hover >
                                <thead className="thead-light">
                                    <tr className="text-center">
                                        <th>구분</th>
                                        <th>지불 금액</th>
                                        <th>사용날짜</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                {data.slice(0, visibleCount).map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{item.type}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                            <div className="d-flex justify-content-center gap-3 mt-2">
                                {visibleCount < data.length && (
                                    <Button variant="outline-primary" onClick={showMore}>더보기</Button>
                                )}
                                {visibleCount < data.length && (
                                    <Button variant="outline-success" onClick={showAll}>전체보기</Button>
                                )}
                                {visibleCount > 3 && (
                                    <Button variant="outline-danger" onClick={resetView}>닫기</Button>
                                )}
                            </div>
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