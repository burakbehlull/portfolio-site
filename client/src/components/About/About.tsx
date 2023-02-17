import React from 'react';
import myPhoto from '../../Assets/me.png';

const About: React.FC = ()=>{

    return (
        <section id="about">
            <div className='about-header'>
                <h1>WHO AM I</h1>
                <h3>My Information</h3>
            </div>
            <div className='about-space'>
                <img src={myPhoto} alt="my photo" />
                <div className='about-text'>
                    <p>My name is Burak, I am 22 years old. <br/>I've been a developer for 2 years.
                        <br/>I am interested in the web domain.<br/>I use Backend and Frontend technologies.</p>
                </div>
            </div>
        </section>
    )
}

export default React.memo(About)