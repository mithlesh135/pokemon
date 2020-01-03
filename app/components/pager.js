import React from "react";

const Pager = ({ prevPage, nextPage }) => {
    return (
        <div className="pager">
            <button onClick = {prevPage}>Prev</button>
            <button onClick = {nextPage}>Next</button>
        </div>
    );
}

export default Pager;