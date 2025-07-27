import React, {useEffect, useMemo, useState} from 'react';
import {Map, MapMarker, CustomOverlayMap} from "react-kakao-maps-sdk";
import {Col, Container, Row} from "react-bootstrap";
import Loading from "../Loding/Loading";
import "./KakaoMap.style.css"
import {useStore} from "../../Hooks/useStore";
import useKakaoLoader from "./useKakaoLoader";
import ReSetttingMapBounds from "./UnderTools/ReSetttingMapBounds.jsx";
import MoveToMyLocation from "./UnderTools/MoveToMyLocation";
import {MdLocationPin} from "react-icons/md";
import MyLocationMarkerVisible from "./UnderTools/MyLocationMarkerVisible";
import StoreMarkerPin from "./storeMarkerPin/StoreMarkerPin";
import SeeStore from "./StoreSeeeeeeee/SeeStore";

const KakaoMap = () => {
//https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/overlay/categoryMarker 다양한 이미지 마커
//https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/library/keywordBasic 키워드로 장소 검색
    const [keyword, setKeyword] = useState("");
    const store = useStore(keyword);
    const [seeStore, setSeeStore] = useState(null); // 상점 리스트
    const [isVisible, setIsVisible] = useState(true); // 현위치 마커
    const [storeClick, setStoreClick] = useState({ id: 0, bool: false });

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

    useEffect(()=>{
        searchStore();
    }, [store]);

    /**지도 범위 재설정 시작*/
    useKakaoLoader()
    const [points, setPoints] = useState([])
    /**지도 범위 재설정 끝*/

    const searchStore = () => {
        // console.log("음 퍽킹 쒯: ",store); //와 진짜 하 진짜 진짜 진짜
        const filtered = store.length > 0 && keyword !== "" ? store : null;
        setSeeStore(filtered);
        /**지도 범위 재설정 시작*/
        if (filtered) {
            const markerPoints = filtered.map((item) => ({
                lat: item.y,
                lng: item.x,
            }));
            setPoints(markerPoints);
        } else {
            setPoints([]);
        }
        /**지도 범위 재설정 끝*/
        // console.log("Fuck:", store); //데이터 잘 오는지 확인용
        // console.log("Fuck:", seeStore); //데이터 잘 오는지 확인용
    };
    return (
        state.isLoading ? (
            <div><Loading /></div>
        ) : (
            <div className="KakaoMap">
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" id={"searchKeyword"} value={keyword}
                                onChange={(e) => {setKeyword(e.target.value);}}
                                placeholder="검색" aria-label="검색"/>
                            <button className="btn btn-primary" type="button" id={"searchBtn"} onClick={searchStore}>검색</button>
                            {/*모바일 환경에서 검색 버튼을 누를까?*/}
                        </form>
                    </div>
                </nav>
                <Container className={"NoPadding"} style={{width: '100%', height: '100%'}}>
                    <Row className={"NotFlex NoMargin"} style={{width: '100%', height: '100%'}}>
                        <div className={"KakaoMapBox"}>
                            <div className={"KaKaoMapOverTools"}>
                                <button className="btn btn-primary">착한가게</button>
                                <button className="btn btn-primary" onClick={()=>{setKeyword("음식점");}}>음식점</button>
                                <button className="btn btn-primary" onClick={()=>{setKeyword("카페");}}>카페</button>
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
                                level={2} draggable={true}
                            >
                                {seeStore === null?
                                    <CustomOverlayMap position={state.center} yAnchor={1}>
                                        {isVisible?<MdLocationPin style={{ fontSize: "32px", color: "red" }} />:null}
                                    </CustomOverlayMap>
                                    :
                                    <>
                                        <CustomOverlayMap position={state.center} yAnchor={1}>
                                            {isVisible?<MdLocationPin style={{ fontSize: "32px", color: "red" }} />:null}
                                        </CustomOverlayMap>
                                        {seeStore?.map((item) => (
                                            <StoreMarkerPin storeClick={storeClick} item={item} key={item.id} />
                                    ))}
                                    </>
                                }
                                <div className={"KaKaoMapUnderTools"}>
                                    <MoveToMyLocation state={state} setIsVisible={setIsVisible}/>
                                    <MyLocationMarkerVisible isVisible={isVisible} setIsVisible={setIsVisible} />
                                    {seeStore === null ? null : <ReSetttingMapBounds points={points} /> }

                                </div>
                            </Map>
                        </div>
                    </Row>
                    <Row className={""}>
                        <SeeStore setStoreClick={setStoreClick} seeStore={seeStore}/>
                    </Row>

                </Container>
            </div>
        )
    );
};

export default KakaoMap;