import React from "react";

const ListItem = ({name = "", id = 0, sprites : { front_default = "" } = {}}) => {
    return (
        <div className="list-item">
            <div className="header">
                <label>{name}</label><label>ID: {id}</label>
            </div>
            <div className = "content">
                <img src={front_default}></img>
            </div>
        </div>
    );
};

export default ListItem;