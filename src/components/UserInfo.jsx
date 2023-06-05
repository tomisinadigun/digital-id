import React from "react";


const UserInfo = ({firstname, lastname, descript}) => {
    return (
        <>
            <div className="user-info">
                <h3>{firstname} {lastname}</h3>
                <p>{descript}</p>
            </div>
        </>
    )
}

export default UserInfo;