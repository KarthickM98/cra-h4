import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <Link to='/home' className="nav-link active display-4 px-5" href="#">Home <span className="sr-only">(current)</span></Link>
              <Link to='/student' className="nav-link display-4 px-5" href="#">Student</Link>
              <Link to='/contact' className="nav-link display-4 px-5" href="#">Contact-us!</Link>
            </div>
        </div>
        </nav>

    )
}
export default Header
