import React, {useEffect, useState} from 'react';
import {MapMarker, useMap} from "react-kakao-maps-sdk";
/* global kakao */

const StoreMarkerPin = ({item}) => {
    const [isInfoWindow, setIsInfoWindow] = useState(false);
    const map = useMap()

    const moveCenterStore = (marker) => {
        setIsInfoWindow(prev => !prev);
        setTimeout(() => {
        map.panTo(marker?.getPosition())
        }, 0)
    }


    return (
        <div>
            <MapMarker key={item.id}
                       position={{lat: item.y, lng: item.x}}
                       removable={true}
                       clickable={true}
                       image={{src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                           size:{width:isInfoWindow?24:20, height: isInfoWindow?35:30}}}
                       onClick={(marker) =>
                           moveCenterStore(marker)
                       }
            >{isInfoWindow ? item.placeName : null}</MapMarker>
        </div>
    );
};

export default StoreMarkerPin;