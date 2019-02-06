import React from "react";

export default function Tile(props) {

    return (
        <div className="tile" onClick={() => props.handleTileClick(props.id)}>
            <img className="image" src={props.img} />
        </div>
    );
}
