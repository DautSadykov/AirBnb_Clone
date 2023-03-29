import React from "react";
import star_picture from "../images/star.png"

export default function CardPiece(props) {
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    } 
    return(
        <div className="card-piece">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${props.card.coverImg}`} alt="coverImg" />
            <div className="rating-line">
                <img src={star_picture} alt="star_picture" />
                <div className="rating">{props.card.stats.rating}</div>
                <div className="review-count">({props.card.stats.reviewCount})</div>
                <div className="location"> • {props.card.location}</div>
            </div>
            <h5>{props.title}</h5>
            <p><b>From ${props.card.price}</b> / person</p>
        </div>
    )
}