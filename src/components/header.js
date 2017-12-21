import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div className="flexbox-containter" >
              <Link to="/" className="logo">
                <span></span>
              </Link>
              <nav>
                  <Link to="/teams">Equipos</Link>
              </nav>    
            </div>
        </header>    
    )
}

export default Header