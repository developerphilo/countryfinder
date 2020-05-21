import React from 'react'

const Navbar = ({handleInput, getSearch})=>{
    return (
        <div className="nav-bar">
            <div>
                <h1>Country Finder</h1>
                <p>Get to know About Countries</p>
                <input 
                type="text" 
                placeholder="Search Country ..."
                onChange={handleInput}
                onKeyPress={getSearch}
                
                />
            </div>
        </div>
    )
}

export default Navbar;
