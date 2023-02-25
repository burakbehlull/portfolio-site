import React from 'react';
import myPhoto from '../../Assets/me.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../../Variants';


const About: React.FC = ()=>{

    return (
        <section id="about">
            <motion.div 
            className='about-header'
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}>
                <h1>WHO AM I</h1>
                <h3>My Information</h3>
            </motion.div>

            <motion.div 
            className='about-space'
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            >
                <img src={myPhoto} alt="my photo" className='photo' />
                <div className='about-text'>
                    <p>My name is Burak, I am 22 years old. <br/>I've been a developer for 2 years.
                        <br/>I am interested in the web domain.<br/>I use Backend and Frontend technologies.<br/>And as a hobby; I am interested in design<br />and write a blog.</p>
                    <ul>
                        <li>
                        <a href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </motion.div>


            
        </section>
    )
}

export default React.memo(About)