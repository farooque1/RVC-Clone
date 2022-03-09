import React from 'react'
import { Link } from 'react-router-dom';

export default function Dropdown() {

    return (
        <div>
             <div class="dropdown">
                <button class="dropbtn"> I'm a resident of </button>
                <div class="dropdown-content">
                <Link to={`/Austria`}> Austria </Link>
                <Link to={`/Belgium`}>Belgium</Link>
                <Link to={`/Austria`}>Bulgaria</Link>
                <Link to={`/Austria`}>Canada</Link>
                <Link to={`/Austria`}>Czech Republic</Link>
                <Link to={`/Austria`}>Denmark</Link>
                <Link to={`/Austria`}>Estonia</Link>
                <Link to={`/Austria`}>France</Link>
                <Link to={`/Austria`}>Germany</Link>
                <Link to={`/Austria`}>Greece</Link>
                <Link to={`/Austria`}>India</Link>
                <Link to={`/Austria`}>Latvia</Link>
                <Link to={`/Austria`}>Lithuania</Link>
                <Link to={`/Austria`}>Poland</Link>
                <Link to={`/Austria`}>Portugal</Link>
                <Link to={`/Austria`}>Romania</Link>
                <Link to={`/Austria`}>Singapore</Link>
                <Link to={`/Austria`}>South Korea</Link>
                <Link to={`/Austria`}>Switzerland</Link>
                <Link to={`/Austria`}>Turkey</Link>
                <Link to={`/Austria`}>United Arab Emirates</Link>
                <Link to={`/Austria`}>United Kingdom</Link>
                <Link to={`/Austria`}>USA</Link>
                <Link to={`/Austria`}>Vietnam</Link>
                </div>
                </div>   
        </div>
    )
}
