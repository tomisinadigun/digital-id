import React from "react";

const Button = ({following}) => {
    return (
        <>
            <div className="btn-container">
                <button className="follow-btn">
                    {following === true? "Following": "Follow" }
                </button>
            </div>
        </>
    )
}


export default Button;