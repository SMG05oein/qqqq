import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useUser} from "../Hooks/useUser";
import {LoginContext} from "../Hooks/LoginState";
import "./Login.style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = ({setIsProfile}) => {
    useEffect(()=>{
        setIsProfile(true);
        return () => {
            setIsProfile(false);
        };
    })

    const { setLogin } = useContext(LoginContext);

    const [studentId, setStudentId] = useState("");
    const [passwd, setPasswd] = useState("");
    const [userType, setUserType] = useState('');
    const studentIdRef = useRef(null);
    const passwdRef = useRef(null);
    const navigate = useNavigate();
    const user = useUser();
    let str = "";

    const handleSubmit = (event) => {
        event.preventDefault();
        if(studentId === "") {
            alert("학번을 입력해주세요.");
            studentIdRef.current.focus();
            return;
        }
        if(passwd === "") {
            alert("비밀번호를 입력해주세요.");
            passwdRef.current.focus();
            return;
        }
        let check = false;
        for(let i = 0; i < user.length; i++){
            if(user[i].id != studentId || user[i].pw != passwd){
                check = false;
            }else{
                check = true;
                str = user[i].id
                break;
            }
        }
        if(check){
            alert("로그인 성공!");
            if (/^test[1-5]$/.test(str)) {
                const number = parseInt(str.slice(4));
                setLogin({isLogin: true, idx: number});
            }
            navigate("/");
        }else{
            alert("학번 또는 비밀번호가 맞지 않습니다!!");
        }
    };

    return (
        <Container className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="아이디을 입력하세요"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        ref={studentIdRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>이름</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력하세요"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        ref={studentIdRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="이메일을 입력하세요"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        ref={studentIdRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="비밀번호"
                        value={passwd}
                        onChange={(e) => setPasswd(e.target.value)}
                        ref={passwdRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPasswordOk">
                    <Form.Label>비밀번호 확인</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="비밀번호 확인"
                        value={passwd}
                        onChange={(e) => setPasswd(e.target.value)}
                        ref={passwdRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicType">
                    <Form.Label>구분</Form.Label>
                    <div>
                        <Form.Check
                            type="radio"
                            label="소비자"
                            name="userType"
                            value="0"
                            checked={userType === "consumer"}
                            onChange={(e) => setUserType(e.target.value)}
                            inline
                        />
                        <Form.Check
                            type="radio"
                            label="판매자"
                            name="userType"
                            value="1"
                            checked={userType === "seller"}
                            onChange={(e) => setUserType(e.target.value)}
                            inline
                        />
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit">
                    확인
                </Button>
                <p/>
                <Button variant="dark" type="button" onClick={()=>navigate('/')}>
                    취소
                </Button>
            </Form>
        </Container>
    );
};

export default SignUp;