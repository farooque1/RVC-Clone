import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from './Footer';
import News from './News';
import Usefull from './Usefull';


export default function NewsDelay() {

    return (
        <div>
            <Nav />

            <div className='container py-5 mb-5' >
                <button className='btn btn-light'><Link to="/Austria"> <i class="fa fa-long-arrow-left" aria-hidden="true"></i>  Back to news </Link></button>
                <p style={{fontSize:'13px',marginBottom:'30px'}}>Published on 14/7/2021</p>
                <h1 style={{fontSize:'43px',marginBottom:'55px',fontWeight:'300'}}>Cash payment - Visa Centre Antwerp</h1>
                <h4 style={{fontSize:'23px',marginBottom:'40px',fontWeight:'400'}}>Dear Applicants,</h4>
                <h4 style={{fontSize:'23px',marginBottom:'50px',fontWeight:'400'}}>We would like to inform you that the Consulate General in Antwerp temporarily accepts only cash payments that is why we would like to ask you to pay Consular fee in cash. All Visa Centre services can be paid by bank card.</h4>
                <h4 style={{fontSize:'23px',marginBottom:'50px',fontWeight:'400'}}>We apologize for the inconvenience.</h4>
            </div>

            <Usefull />
            <Footer />
        </div>
    )
}
