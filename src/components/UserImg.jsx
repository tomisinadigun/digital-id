import React from "react";


const UserImg = ({userImage}) => {
    return (
        <>
            <figure className="profile-img-container">
                <img src={userImage} alt="" />
            </figure>
        </>
    )
}

export default UserImg;