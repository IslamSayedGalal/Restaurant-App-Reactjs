import React, { Fragment } from 'react'
import Header from '../Header/Header';
import Pride from '../Pride/Pride';
import Ingredients from '../Ingredients/Ingredients';
import './Home.css';
import VideoSec from '../VideoSec/VideoSec';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';
import Frequently from '../Frequently/Frequently';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <Fragment>
        <Header/>
        <section className='numbers'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h2>1287+</h2>
                        <h6>SAVING</h6>
                    </div>
                    <div className='col-md-3'>
                        <h2>5786+</h2>
                        <h6>PHOTOS</h6>
                    </div>
                    <div className='col-md-3'>
                        <h2>1440+</h2>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className='col-md-3'>
                        <h2>7110+</h2>
                        <h6>GLOBES</h6>
                    </div>
                </div>
            </div>
        </section>
        <Pride/>
        <Ingredients />
        <VideoSec/>
        <Products/>
        <Slider />
        <Frequently/>
        <Contact/>
        <Footer/>
    </Fragment>
  )
}

export default Home;