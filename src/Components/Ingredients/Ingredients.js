import React from 'react';
import ingredientsImage from './../../assets/2.png';
import './Ingredients.css';
import {AiOutlineCheck} from "react-icons/ai";

const Ingredients=()=> {
  return (
    <div className='ingredients'>
        <div className='container'>
            <div className='row center-content'>
                <div className='col-lg-6 col-md-12'>
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul>
                        
                        <li><span><AiOutlineCheck/></span>Etiam sed dolor ac diam volutpat.</li>
                        <li><span><AiOutlineCheck/></span>Erat volutpat aliquet imperdiet.</li>
                        <li><span><AiOutlineCheck/></span>purus a odio finibus bibendum.</li>
                    </ul>
                    <button><a href='/'>Learn More</a></button>
                </div>
                <div className='col-lg-6 col-md-12'>
                    <img src={ingredientsImage} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ingredients;