
import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Go to main page</Link>
        </div>
    )
}

export default Header