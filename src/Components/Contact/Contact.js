import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>
                    Hurry up! Subscribe our newsletter
                    <br/>
                    and get <span>25% Off</span>
                    </h1>
                    <p>Limited time offer for this month. No credit card required.</p>
                    <form className='intro-newsletter' id='invite' action='#' method='POST'>
                        <div className='row'>
                            <div className='col-lg-7 col-md-12'>
                                <input type='text' placeholder="Email Address here" name="email" id="eaddress" className='e-mail'/>
                            </div>
                            <div className='col-lg-5 col-md-12'>
                                <button class="btn btn-primary btn-block" type='submit'>Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact