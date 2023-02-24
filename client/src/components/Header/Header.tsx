import React from 'react';
import developerImg from '../../Assets/developerImg.avif'; 
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../Variants';

const Header: React.FC = ()=> {

    return(
        <section id="header">
            <div className="header-box">
                <div className='header-text'>

                    <motion.h1
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}             
                    >Hi, I am Burak<br /><span>I'm </span><TypeAnimation sequence={[
                    'Fullstack Web Developer',
                    2000,
                    'Designer',
                    2000,
                    'Blogger',
                    2000 ]}
                    speed={50}
                    wrapper='span'
                    repeat={Infinity}
                    /></motion.h1>
                    <motion.p
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}             
                    >I am interested in the field of web development and<br/>I am a Designer as well as a blogger.</motion.p>
                    
                    <motion.ul
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
                    >
                        <li><a href="#about">Contact Me</a></li>
                    </motion.ul>
                </div>
                <motion.img
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}   
    
                src={developerImg}
                alt="header page developer image" />
            </div>
        </section>
    )
}

export default React.memo(Header)