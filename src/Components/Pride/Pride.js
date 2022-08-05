import React from 'react';
import pride from './../../assets/1.png';
import './Pride.css';

const Pride = ()=> {
  return (
    <section className='Pride'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7 col-md-12 col-sm-12'>
                    <img src={pride} alt=""/>
                </div>
                <div className='col-lg-5 col-md-12 col-sm-12'>
                    <h2>We pride ourselves on making real food from the best ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <button><a href='#'>Learn More</a></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pride;