import React, {useEffect, useState} from 'react';
import {MapMarker, useMap} from "react-kakao-maps-sdk";
/* global kakao */

const StoreMarkerPin = ({item}) => {
    const [isInfoWindow, setIsInfoWindow] = useState(false);
    const [tempStr, setTempStr] = useState(null);
    const map = useMap()

    // useEffect(() => {
    //     // moveCenterStore(marker);
    //
    // }, [isInfoWindow]);

    useEffect(() => {
        // if (tempStr) {
        //     console.log("tempStr: ", tempStr.getPosition());
        // }
        moveCenterStore(tempStr);
    }, [isInfoWindow]);


    const moveCenterStore = (marker) => {
        map.panTo(marker.getPosition())
    }


    return (
        <div>
            <MapMarker key={item.id}
                       position={{lat: item.y, lng: item.x}}
                       removable={true}
                       clickable={true}
                       image={{src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                           size:{width:24, height: 35}}}
                       onClick={(marker) => {
                           setTempStr(marker);
                           // console.log(marker);
                           // console.log(tempStr);
                           moveCenterStore(marker)
                           setIsInfoWindow(!isInfoWindow)
                       }}
            >{isInfoWindow ? item.placeName : null}</MapMarker>
        </div>
    );
};

export default StoreMarkerPin;