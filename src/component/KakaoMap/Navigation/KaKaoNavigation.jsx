import React from 'react';
import {Polyline} from "react-kakao-maps-sdk";
import {useSearchLoad} from "../../../Hooks/useSearchLoad";


const KaKaoNavigation = ({state_center}) => {
    const destination = { lat: 36.845306, lng: 127.1553351 };
    const routeCoords = useSearchLoad(state_center, destination);

    return (
        <div>
            {routeCoords?.length > 0 && (
                <Polyline
                    path={routeCoords}
                    strokeWeight={5}
                    strokeColor={"#FF6347"}
                    strokeOpacity={0.8}
                    strokeStyle={"solid"}
                />
            )}
        </div>
    );
};

export default KaKaoNavigation;