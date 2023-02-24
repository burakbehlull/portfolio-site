import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../Variants';

const Navbar: React.FC = ()=>{
    return(
        <nav>
            <motion.ul
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}>
                <li id='header-text'><a href="#">I'M BUVAK</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
            </motion.ul>
        </nav>
    )
}

export default React.memo(Navbar)