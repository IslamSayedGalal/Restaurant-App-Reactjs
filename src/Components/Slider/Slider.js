import React from 'react';
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import item1 from '../../assets/Slider1.jpg';
import item2 from '../../assets/Slider2.jpg';
import item3 from '../../assets/Slider1.jpg';


function Slider() {
  return (
    <div className='Sliders'>
        <h2>Testimonials</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                <Carousel>
                    <Carousel.Item>
                        <img src={item1} alt="First slide"/>
                        <Carousel.Caption>
                            <p>Far tar away, behind the Word mountains, Tar from the countries Vokalia and Consonantia, there live the blind texts."</p>
                            <span>Maccy Doe - Front End</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={item2} alt="Second slide"/>
                        <Carousel.Caption>
                            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p>
                            <span>Johnthan Doe - UX Designer</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={item3} alt="Third slide"/>
                        <Carousel.Caption>
                            <p>Far tar away, behind the Word mountains, Tar from the countries Vokalia and Consonantia, there live the blind texts."</p>
                            <span>Maccy Doe - Front End</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>
    </div>
)
}

export default Slider