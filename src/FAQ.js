import React from 'react'
import Footer from './component/Footer'
import Usefull from './component/Usefull'
import Nav from './Nav'

export default function FAQ() {

    return (
        <div>
            <Nav />
            <div className='container'>
                <h1>FAQ's</h1>
                <p>This section provides answers to many of the frequently asked questions by clients about the visa application process.</p>
            </div>
            <Usefull />
            <Footer />

        </div>
    )
}
