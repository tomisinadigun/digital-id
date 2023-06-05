import React from "react";
import {BsImage} from "react-icons/bs";
import {BsHeart} from "react-icons/bs";
import {BsSend} from "react-icons/bs"


const CardFooter = ({posts, favorites, messages}) => {
    return (
        <>
        <div className="footer-container">
            <div className="footer-item">
                <div className="footer-icon">
                    <BsImage />
                </div>
                <div className="footer-info">
                    <p>Posts</p>
                    <span>{posts}</span>
                </div>
            </div>
            <div className="footer-item">
                <div className="footer-icon">
                    <BsHeart />
                </div>
                <div className="footer-info">
                    <p>Favorites</p>
                    <span>{favorites}</span>
                </div>
            </div>
            <div className="footer-item">
                <div className="footer-icon">
                    <BsSend />
                </div>
                <div className="footer-info">
                    <p>Messages</p>
                    <span>{messages}</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardFooter;