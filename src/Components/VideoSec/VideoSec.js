import React from 'react';
import {AiFillCaretRight} from "react-icons/ai";
import './VideoSec.css';

function VideoSec() {
  return (
    <div className='VideoSec'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h1>When a man's stomach is full it makes no difference whether he is rich or poor.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <a href="/">
                        <div>
                            <AiFillCaretRight/>
                            Watch Our Story
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoSec;