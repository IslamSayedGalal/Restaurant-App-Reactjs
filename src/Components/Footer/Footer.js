import React from 'react';
import './Footer.css';
import {AiFillFacebook,AiOutlineTwitter,AiFillYoutube,AiFillLinkedin,AiOutlineInstagram} from "react-icons/ai";

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 content'>
                        <a href="/">Register</a>
                        <a href='/'>Forum</a>
                        <a href='/'>Affiliate</a>
                        <a href='/'>FAQ</a>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 content'>
                    <a href='/'><AiFillFacebook/></a>
                    <a href='/'><AiOutlineTwitter/></a>
                    <a href='/'><AiFillYoutube/></a>
                    <a href='/'><AiFillLinkedin/></a>
                    <a href='/'><AiOutlineInstagram/></a>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <p>&copyright;2021. Foodera. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer