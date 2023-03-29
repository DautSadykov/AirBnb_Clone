import React from "react";
import data from "./data.js"
import CardPiece from "./CardPiece";


export default function Cards() {
    const cardsElements = data.map(card => {
        return (
            <CardPiece 
            card = {card}
            />
        )
    })
    return (
        <div className="card-row">
            {cardsElements}
        </div>
    )
}