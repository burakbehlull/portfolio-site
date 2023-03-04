import React from 'react';
import spotifyProductDesign from '../../Assets/sites/spd-desktop.png';
import mernTodoApp from '../../Assets/sites/mern-todo-app.png';
import github from '../../Assets/icons/github.svg';
import openLink from '../../Assets/icons/open-link.svg';


const Projects: React.FC = ()=>{
    return(
        <section id='projects'>
            <div className='projects-header'>
                <h1>PROJECTS</h1>
                <h3>Projects I created</h3>
            </div>

            <div className='projects-space'>
                <div className='project-left'>

                    <div className="project-box">
                            <img src={spotifyProductDesign} alt="Spotify Product Design Desktop Image" />
                    </div>
                    <div className="project-text">
                        <h2>Spotify Product Design</h2>
                        <p>A site I made myself, written in scss.</p>
                        <div className="project-buttons">
                        <a href="https://github.com/iambuvak/spotify-product-design" target='_blank'><img src={github} alt="Github Logo" /></a>
                        <a href="https://iambuvak.github.io/spotify-product-design" target='_blank'><img src={openLink} alt="Open Link" /></a>
                        </div>
                    </div>
                </div>
                <div className='project-right'>
                    <div className="project-text">
                        <h2>Mern Todo App</h2>
                        <p>"Mern Todo App" is an application that<br /> I wrote with React TypeScript and Scss <br /> on the Frontend and Nodejs on the Backend with Mongodb.</p>
                        <div className="project-buttons">
                        <a href="https://github.com/iambuvak/mern-todo-app" target='_blank'><img src={github} alt="Github Logo" /></a>
                        <a href="#" target='_blank'><img src={openLink} alt="Open Link" /></a>
                        </div>
                    </div>
                    <div className="project-box">
                            <img src={mernTodoApp} alt="Spotify Product Design Desktop Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Projects)