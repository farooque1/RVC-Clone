import React from 'react'
import { Link } from 'react-router-dom'

export default function News() {
  return (
    <div>
        <div className='container py-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <div className='news mt-5 mb-5'>
                    <h1>News and updates</h1>

                     <h6 className='mt-4'><Link to="/NewsDelay"> Lockdown Regulations </Link></h6>
                     <p>Published on 22/11/2021</p>   

                     <h6 className='mt-4'><Link to="/NewsDelay"> Advisory for travelers to Russia </Link></h6>
                    <p>Published on 16/5/2021</p>

                    <h6 className='mt-4'><Link to="/NewsDelay"> COVID-19 courier service </Link></h6>
                    <p>Published on 16/4/2021</p>
                     
                     <button className='btn btn-light'>More News  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                    </div>
                    

                </div>

                <div className='col-6'>
                    <div className='mt-5'><h1>Which type of Visa are you searching for?</h1></div>

                    <div className='type mt-4 mb-5'>
                            <h6><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Humanitarian Visa</h6>
                            <h6><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Student Visa</h6>
                            <h6><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Transit Visa</h6>
                            <h6><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Work Visa</h6>
                            <h6><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Private Visa</h6>
                            <h6><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Tourist Visa</h6>
                            <h6><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Business Visa</h6>
                    </div>    

                </div>

            </div>
            <hr className='mt-5' style={{color:'black'}}/>
        </div>
        
    </div>
  )
}
