import React from "react";
import "../App.css";
import {CiLocationArrow1} from "react-icons/ci";


const Location = ({loc}) => {
    return (
        <>
            <p className="id-location">
                <CiLocationArrow1 />
                {loc}
            </p>
        </>
    )
}

export default Location