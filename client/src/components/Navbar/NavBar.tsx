import React from 'react';

const Navbar: React.FC = ()=>{
    return(
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    )
}

export default React.memo(Navbar)