import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './img/logo_russia_visa_centre_acr.png';


function Nav() {

        return (

      <div>

        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" className='logo1' />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse py-4" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <NavLink class="nav-link dropdown-toggle ms-3" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Visa Types
                    </NavLink>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><NavLink class="dropdown-item" to="/">Action</NavLink></li>
                        <li><NavLink class="dropdown-item" to="/">Another action</NavLink></li>
                    </ul>
                    </li>
                <li class="nav-item dropdown">
                    <NavLink class="nav-link dropdown-toggle ms-3" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    General Information
                    </NavLink>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><NavLink class="dropdown-item" to="/">Action</NavLink></li>
                        <li><NavLink class="dropdown-item" to="/">Another action</NavLink></li>
                    </ul>
                    </li>

                <li className="nav-item">
                  <NavLink className="nav-link active ms-3" to="/Additionalservice">
                    Additional Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active ms-3" to="/Newsupdate">
                    News and updates
                  </NavLink>
                </li>
                <li class="nav-item dropdown">
                    <NavLink class="nav-link dropdown-toggle ms-3" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                    </NavLink>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><NavLink class="dropdown-item" to="/">Action</NavLink></li>
                        <li><NavLink class="dropdown-item" to="/">Another action</NavLink></li>
                    </ul>
                    </li>
                
                <li className="nav-item">
                  <NavLink className="nav-link active ms-3" to="/FAQ">
                    FAQ'S
                  </NavLink>
                </li>
              </ul>
              <div>
                  <NavLink to="/login" className="ms-3">Home </NavLink>

                     <NavLink to="/login" className="ms-3">En </NavLink>

              </div>
            </div>
          </div>
        </nav>

      </div>

        )
    }
    
    export default Nav;