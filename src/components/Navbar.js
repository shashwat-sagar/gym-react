import React from 'react'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import logo from './Media/logo/logo.png'
import{ Link } from "react-router-dom";


function Navbar() {
    return (
      
        <div classNameName="Navbar">
        <div className="header">
        <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
            <div className="wrapper"></div>
            <div className="container-fluid all-show">
                <Link className="navbar-brand" to="/"><img src={logo}
                        className="gymLogo2" alt="" />
                    <font color="#ffc400" size="6px">A</font>thlete
                    <font color="#ffc400" size="6px">C</font>lub
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                <font color="#ffc400" size="4px">H</font>ome
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">
                                <font color="#ffc400" size="4px">A</font>bout us
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">
                                <font color="#ffc400" size="4px">S</font>ervices
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">
                                <font color="#ffc400" size="4px">G</font>allery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">
                                <font color="#ffc400" size="4px">C</font>ontact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Signup">
                                <font color="#ffc400" size="4px">P</font>remium
                                <font color="#ffc400" size="4px"><i className="fas fa-crown"></i></font>
                            </Link>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
    </div>
    </div>
   
    )
}

export default Navbar
