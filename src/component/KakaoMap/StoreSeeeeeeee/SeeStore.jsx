import React, {useState} from 'react';
import {Col} from "react-bootstrap";
import "./SeeStore.style.css"
import {BsCaretUpFill, BsFillCaretDownFill} from "react-icons/bs";

const SeeStore = ({seeStore, setStoreClick}) => {
    const [showStoreList, setShowStoreList] = useState(false);

    const fff = (store) => {
        // console.log(store.id);
        setStoreClick(prev=>({id: store.id, bool: !prev.bool }));
    };

    return (
        <div>
            <div className={"storeBox"} style={{marginTop:"20px"}}>
                <Col>
                    <h5 onClick={()=> setShowStoreList(!showStoreList)}>
                        검색된 장소 {seeStore?.length ? seeStore?.length : 0 }개 {showStoreList ? <BsCaretUpFill /> : <BsFillCaretDownFill />}
                    </h5>
                    {showStoreList ? (
                        seeStore?.length > 0 ? (
                            seeStore.map((store) => (
                                <div className="storeItem" key={store.id} onClick={(prev)=>{fff(store, prev)}}>
                                    <div className="storeName">이름: {store.placeName}</div>
                                    <div className="storeCategory d-flex align-items-center justify-content-between">
                                        <div>분류: {store.category}</div>
                                        <div>전화번호: {store.phone ? store.phone : "없음"}</div>
                                    </div>
                                    <div className="storeAdress">주소: {store.addressName}</div>
                                </div>
                            ))
                        ) : (
                            <div>없음</div>
                        )
                    ) : null}
                </Col>
            </div>
        </div>
    );
};

export default SeeStore;