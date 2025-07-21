import React, {useEffect, useState} from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import {Container} from "react-bootstrap";
import Loading from "../Loding/Loading";
import "./KakaoMap.style.css"

const KakaoMap = () => {
//https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/overlay/categoryMarker 다양한 이미지 마커
// https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/library/keywordBasic 키워드로 장소 검색
    /** 현 위치 기반으로 마커 시작*/
    const [state, setState] = useState({
        center: {
            lat: 33.450701,
            lng: 126.570667,
        },
        errMsg: null,
        isLoading: true,
    })

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setState((prev) => ({
                        ...prev,
                        center: {
                            lat: position.coords.latitude, // 위도
                            lng: position.coords.longitude, // 경도
                        },
                        isLoading: false,
                    }))
                },
                (err) => {
                    setState((prev) => ({
                        ...prev,
                        errMsg: err.message,
                        isLoading: false,
                    }))
                }
            )
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            setState((prev) => ({
                ...prev,
                errMsg: "geolocation을 사용할수 없어요..",
                isLoading: false,
            }))
        }
    }, [])
    /**현 위치 기반으로 마커 끝*/
    // console.log(state);

    return (
        state.isLoading ? (
            <div><Loading /></div>
        ) : (
            <div className="KakaoMap">
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="검색" aria-label="검색"/>
                            <button className="btn btn-primary" type="submit">검색</button> {/*모바일 환경에서 검색 버튼을 누를까?*/}
                        </form>
                    </div>
                </nav>
                <Container className={"NoPadding"} style={{width: '100%' ,height: '100%'}}>
                    <div className={"KakaoMapBox"}>
                        <div className={"KaKaoMapOverTools"}>
                            <button className="btn btn-primary">착한가게</button>
                            <button className="btn btn-primary">음식점</button>
                            <button className="btn btn-primary">카페</button>
                            <button className="btn btn-primary">~</button>
                            <button className="btn btn-primary">~</button>
                            <button className="btn btn-primary">~</button>
                            <button className="btn btn-primary">~</button>
                            <button className="btn btn-primary">~</button>
                            <button className="btn btn-primary">~</button>
                        </div>
                        <Map
                            center={state.center}
                            style={{width: '94%', height: '90%', borderRadius: '10px'}}
                            level={3}
                        >
                            {!state.isLoading && (
                                <MapMarker position={state.center}></MapMarker>
                            )}
                        </Map>
                        <div className={"KaKaoMapUnderTools"}>
                            <button className="btn btn-primary">현위치</button>
                        </div>
                    </div>
                </Container>
            </div>
        )
    );
};

export default KakaoMap;