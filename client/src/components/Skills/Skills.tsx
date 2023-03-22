import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../Variants';

import frontendIcon from '../../Assets/icons/skills-icons/frontend1.png';
import backendIcon from '../../Assets/icons/skills-icons/backend1.png';

import reactIcon from '../../Assets/icons/skills-icons/frontend/react.png';
import scssIcon from '../../Assets/icons/skills-icons/frontend/scss.png';

import nodeIcon from '../../Assets/icons/skills-icons/backend/nodejs.png';
import mongoIcon from '../../Assets/icons/skills-icons/backend/mongodb.png';


const Skills: React.FC = ()=>{
    return(
        <section id='skills'>
            <div className='skills-header'>
                <h1>SKILLS</h1>
                <h3>Technologies I use</h3>
            </div>

            <div className='skills-space'>

                <motion.div className='frontend'
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.2}}>
                    <img src={frontendIcon} alt="Frontend Icon" />
                    <h1>Frontend</h1>
                    <div className='f-box'>
                        <div className='react'>
                            <img src={reactIcon} alt="react Icon" />
                            <p>REACT</p>
                        </div>

                        <div className='scss'>
                            <img src={scssIcon} alt="SCSS Icon" />
                            <p>SCSS</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className='backend'
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.2}}>
                    <img src={backendIcon} alt="Backend Icon" />
                    <h1>Backend</h1>
                    <div className='b-box'>
                        <div className='nodejs'>
                            <img src={nodeIcon} alt="nodejs Icon" />
                            <p>NODEJS</p>
                        </div>
                        <div className='mongodb'>
                            <img src={mongoIcon} alt="mongodb Icon" />
                            <p>MONGODB</p>
                        </div>
                    </div>    
                </motion.div>
            </div>
        </section>
    )
}

export default React.memo(Skills)