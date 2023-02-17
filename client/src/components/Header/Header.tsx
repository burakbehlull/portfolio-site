import React from 'react';
import developerImg from '../../Assets/developerImg.avif'; 
const Header: React.FC = ()=> {

    return(
        <section id="header">
            <div className="header-box">
                <div className='header-text'>
                    <h1>Hi, I am Burak<br /><span>Web Developer</span></h1>
                    <p>I am interested in the field of web development and<br/>I am a Designer as well as a blogger.</p>
                    <ul>
                        <li><a href="#about">Contact Me</a></li>
                    </ul>
                </div>
                <img src={developerImg} alt="header page developer image" />
            </div>
        </section>
    )
}

export default React.memo(Header)