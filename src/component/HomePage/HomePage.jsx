//HomePage.jsx
import React, {useContext, useState} from 'react';
import {Button, Col, Container, Image, Row, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./HomePage.style.css"
import {FaCreditCard, FaPlus, FaWonSign} from "react-icons/fa";
import {LoginContext} from "../../State/LoginState";
import axios from 'axios';

const TOSS_CLIENT_KEY = process.env.REACT_APP_TOSS_CLIENT_KEY;

const HomePage = () => {
    const [seeMoney, setSeeMoney] = useState(true);
    const { login } = useContext(LoginContext);


    const handlePayment = () => {
        if (!window.TossPayments) {
            alert("TossPayments SDK가 로드되지 않았습니다.");
            return;
        }

        const tossPayments = window.TossPayments(process.env.REACT_APP_TOSS_CLIENT_KEY);

        tossPayments.requestPayment('카드', {
            amount: 5000,
            orderId: `order_${Date.now()}`,
            orderName: '포인트 충전',
            customerName: login?.id || '비로그인',
            successUrl: `${window.location.origin}/charge`,
            failUrl: `${window.location.origin}/payment-fail`,
            onSuccess: (res) => {
            const { paymentKey, orderId, amount } = res;
            const userId = login?.id;

            axios.post(`${process.env.REACT_APP_BACKEND_URL}/confirm-payment`, {
                paymentKey,
                orderId,
                amount,
                userId,
            })
            .then(() => {
                alert("✅ 포인트 충전 성공!");
                window.location.href = '/'; // 또는 navigate('/')
            })
            .catch(err => {
                console.error("❌ 백엔드 전송 실패", err);
                alert("⚠️ 서버에 결제 정보 전달 실패!");
            });
            }
        });
        };
    

    // console.log("Login ",login);
    // console.log("isLogin ",login?.isLogin);

      //포인트충전용 토스페이먼츠
      
    //   const handlePayment = () => {
    //     const tossPayments = window.TossPayments(TOSS_CLIENT_KEY);
    
    //     tossPayments.requestPayment('카드', {
    //         amount: 5000,
    //         orderId: `order_${Date.now()}`,
    //         orderName: '포인트 충전',
    //         customerName: '고객명',
    //         successUrl: `${window.location.origin}/payment-success`,
    //         failUrl: `${window.location.origin}/payment-fail`,
    //     });

    // 🔁 HomePage.jsx 상단에 다음 추가:
    // const handlePayment = () => {
    // const tossPayments = window.TossPayments(process.env.REACT_APP_TOSS_CLIENT_KEY);
    // tossPayments.requestPayment('카드', {
    //     amount: 5000,
    //     orderId: `order_${Date.now()}`,
    //     orderName: '포인트 충전',
    //     customerName: login?.id || '비로그인',
    //     successUrl: `${window.location.origin}/payment-success`,
    //     failUrl: `${window.location.origin}/payment-fail`
    // });
    // };


    
    //   return (
    //     <button onClick={handlePayment}>충전하기</button>
    //   );
    // };

    const data = [
        { type: "지출", amount: "7200원", date: "2025-01-03", place: "천안 신부동 고기집" },
        { type: "충전", amount: "5000원", date: "2025-01-04", place: "우리은행 모바일 충전" },
        { type: "지출", amount: "1500원", date: "2025-01-05", place: "스타벅스 천안터미널점" },
        { type: "지출", amount: "8900원", date: "2025-01-06", place: "신세계 푸드코너" },
        { type: "충전", amount: "10000원", date: "2025-01-07", place: "하나카드 자동충전" },
        { type: "지출", amount: "3800원", date: "2025-01-08", place: "GS편의점 천안역점" },
        { type: "지출", amount: "2500원", date: "2025-01-09", place: "맥도날드 신부점" }
    ];

    const foodData = [
        { type: "음식점", range: "250M", name: "천안 역전 김밥나라", detType: "한식" },
        { type: "음식점", range: "430M", name: "버거킹 천안 신부점", detType: "패스트푸드" },
        { type: "음식점", range: "180M", name: "스타벅스 천안 신세계점", detType: "카페" },
        { type: "음식점", range: "520M", name: "홍콩반점 천안터미널점", detType: "중식" },
        { type: "음식점", range: "310M", name: "춘천닭갈비 천안점", detType: "한식" },
        { type: "음식점", range: "620M", name: "도미노피자 천안터미널점", detType: "패스트푸드" },
        { type: "음식점", range: "150M", name: "이디야커피 천안터미널점", detType: "카페" }
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
                        <Col xs={4}><div onClick={()=>{alert("가이드 웹사이트로 이동")}} className={"GuideBox"}>가이드 <br/>보러가기</div></Col>
                    </div>
                </Row>
                {login?.isLogin===false || login===false ?
                    (
                        <>
                            <Row className={"NotFlex"}>
                                <div className={"HomeBox"}>
                                    <Row style={{marginBottom:"20px"}}>
                                        <Col><div className={"fs-4 text-center"}>아직 로그인 전입니다</div></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className={"text-center"}>
                                                <div>계정이 있으신가요? </div><Link to={"/profile"}>로그인</Link>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className={"text-center"}>
                                                <div>계정이 없으신가요? </div><Link to={"/signUp"}>회원가입</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>

                            <Row className={"NotFlex"}>
                                <div className={"HomeBox"}>
                                    <Row style={{marginBottom:"20px"}}>
                                        <Col><div className={"fs-4 text-center"}>주변 상점</div></Col>
                                    </Row>
                                    <Row className={"NotFlex"}>
                                        <Table className={"NoMargin"} variant={""} striped bordered hover >
                                            <thead className="thead-light">
                                            <tr className="text-center">
                                                <th>구분</th>
                                                <th>이름</th>
                                                <th>거리</th>
                                                <th>세부분류</th>
                                            </tr>
                                            </thead>
                                            <tbody className="text-center">
                                            {foodData.slice(0, visibleCount).map((item, idx) => (
                                                <tr key={idx}>
                                                    <td>{item.type}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.range}</td>
                                                    <td>{item.detType}</td>
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
                        </>
                    ):
                    (
                        <>
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
                                                        <div>
                                                            {seeMoney ? `${Number(100000).toLocaleString()}원` : '숨김'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"MoreBtn"} onClick={()=>{setSeeMoney(!seeMoney)}}><FaPlus/>&nbsp;잔액 보기</div>
                                        </Col>
                                    </Row>
                                    <Row className="g-0 p-0 m-0">
                                    {/* 카드관리 */}
                                    <Col className="p-0">
                                        <div className="rounded-box left-rounded w-100">
                                        <Link to="/card" className="d-block text-center w-100 py-2 fw-bold">
                                            <FaCreditCard /> 카드관리
                                        </Link>
                                        </div>
                                    </Col>

                                    {/* 충전 */}
                                    <Col className="p-0">
                                        <div className="rounded-box right-rounded w-100">
                                        <button
                                            onClick={handlePayment}
                                            className="d-block text-center w-100 py-2 fw-bold border-0 bg-transparent"
                                            style={{ fontSize: "1rem" }}
                                        >
                                            <FaWonSign /> 충전
                                        </button>
                                        </div>
                                    </Col>
                                    </Row>
                                </div>
                            </Row>

                            {/*지불 방식*/}
                            <Row className={"NotFlex"}>
                                <div className={"HomeBox"}>
                                    <Row>
                                        <Col><div className={"fs-5"}>이용내역</div></Col>
                                    </Row>
                                    <Row className={"NotFlex"}>
                                        <Table className={"NoMargin"} variant={""} striped bordered hover >
                                            <thead className="thead-light">
                                                <tr className="text-center">
                                                    <th>구분</th>
                                                    <th>지불 금액</th>
                                                    <th>장소</th>
                                                    <th>사용날짜</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-center">
                                            {data.slice(0, visibleCount).map((item, idx) => (
                                                <tr key={idx}>
                                                    <td>{item.type}</td>
                                                    <td>{item.amount}</td>
                                                    <td>{item.place}</td>
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
                                    <Row style={{marginBottom: "20px"}}>
                                        <Col><div className={"fs-5"}>이용내역</div></Col>
                                    </Row>
                                    <Row>
                                        <div className="CardSlider">
                                            {data.map((item, idx) => (
                                                <div className="UsageCard text-center" key={idx}>
                                                    <h5>구분: {item.type}</h5>
                                                    <div>금액: {item.amount}</div>
                                                    <div>장소: {item.place}</div>
                                                    <div>날짜: {item.date}</div>
                                                </div>
                                            ))}
                                        </div>
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
                            </Row>
                        </>
                    )
                }
            </Container>
        </div>
    );
};

export default HomePage;