import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa4">
        <input className="pa3 bg-lightest-blue ba b--green" type="search" placeholder="search robot" onChange={searchChange}/>
    
    </div>
);
};


export default SearchBox;