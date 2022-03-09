import React from 'react'
import Nav from '../Nav'
import Footer from './Footer'
import Usefull from './Usefull'

export default function Additionalservice() {

    return (

        <div>

            <Nav />
            <div className='container py-5 mb-5'>

                <h1 style={{ fontSize: '50px', fontWeight: '100', marginBottom: '30px' }}>Additional Services</h1>
                <div className='travel'>
                    <h4>Travel Insurance is Mandatory.</h4>
                    <h4>Do you have right Insurance cover for Travel?</h4>
                    <h4>Buy travel insurance Online, that covers COVID-19 diagnostic and treatment while Travelling to Russia.</h4>
                    <h4>Please CLICK HERE to Buy Online.</h4>
                </div>

                <h3 style={{ fontSize: '30px', fontWeight: '100', marginBottom: '30px', marginTop: '30px' }}>(All the fees mentioned below are in addition to the regular visa fee applicable and VAT inclusive)</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Price in EUR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Photocopy</td>
                            <td>0.20/photocopy</td>
                        </tr><tr><td>SMS</td>
                            <td>2.00 €</td>
                        </tr>
                        <tr>
                            <td>Photo Facility</td>
                            <td>10.00 € for passport-size photos</td>
                        </tr>
                        <tr>
                            <td>Pre-check</td><td>10.00 €</td>
                        </tr>
                        <tr>
                            <td>Internet Kiosk/Form Filling</td>
                            <td>15.00 €</td>
                        </tr>
                        <tr>
                            <td>Courier Delivery - Standard</td>
                            <td>25.00 € / envelope</td>
                        </tr>
                        <tr>
                            <td>Express Visa</td><td>30.00 €</td>
                        </tr>
                        <tr>
                            <td>Courier Delivery - Express</td>
                            <td>40.00 / envelope</td>
                        </tr>
                        <tr>
                            <td>Premium Lounge</td>
                            <td>60.00 €</td>
                        </tr>
                    </tbody>
                </table>

                <div className='travel'>
                    <p>At the Russia Visa Centre, we constantly strive to offer a range of high-end services to enhance customer satisfaction.</p>
                    <p>Photocopying services are available for applicant’s use at the centre if required.</p>
                    <p>Another service offered by the Russia Visa Centre is the Courier Service, whereby the applicant’s Travel document can be returned by Special Delivery in both Standard and Express options – here the Russia Visa centre uses the services of a private courier company to any delivery address in Belgium chosen by the applicant. This can be purchased at the time of the visa application submission and you will receive a reference number, which can be tracked on the courier company’s website in order to obtain an update about the courier process at any given time.</p>

                    <h1>Premium Lounge Service</h1>
                    <p>The Russia Visa Centre is pleased to offer a Premium Lounge Service in the visa application centre for applicants who would like a higher quality and more personalised service; every applicant can opt for this service during their visit to our visa application centre at any given time, simply by informing a Russia Visa Centre staff member.</p>

                    <p>Please find below the services offered:</p>

                    <p>Direct access to a Premium Lounge counter where an agent will verify the documents provided, and take payment in a single location;</p>
                    <p>A dedicated team member assisting during the submission process;</p>
                    <p>Assistance in completing the visa application form;</p>
                    <p>Important notice:</p>
                    <p>Please note the premium service does not guarantee the right to obtain a visa, nor faster processing of your file by the Consulate.</p>

                </div>

            </div>
            <Usefull />
            <Footer />

        </div>
    )
}
