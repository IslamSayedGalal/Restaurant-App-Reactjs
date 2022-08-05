import React, { Fragment } from 'react';
import './Frequently.css';

function Frequently() {
  return (
    <Fragment>
         <div className='Frequently'>
        <h3>Frequently Asked Questions</h3>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 data'>
                    <h5><span>~</span> Is Foodera Bread really baked fresh each day?</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <h5><span>~</span> Do you bake breads containing animal fats or products?</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <h5><span>~</span> Can I order your products online?</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <h5><span>~</span> When are you opening a shop near me?</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
            </div>

        </div>
    </div>

    <div className='Baked-fresh'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-12'>
                    <h2>Baked fresh daily by bakers with passion.</h2>
                </div>
                <div className='col-lg-4 col-md-12 btn'>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
   
  )
}

export default Frequently