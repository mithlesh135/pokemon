import React from "react";
import ListItem from "./listItem"

const List = ({items}) => {
    return (
        <ul className="list">
            { items.map((item, index) => <li key={index}>{ <ListItem {...item}/> }</li>) }
        </ul>
    );
};

export default List;