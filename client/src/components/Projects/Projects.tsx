import React from 'react';

const Projects: React.FC = ()=>{
    return(
        <section id='projects'>
            <div className='projects-header'>
                <h1>PROJECTS</h1>
                <h3>Projects I created</h3>
            </div>

            <div className='projects-space'>
                <div className='project'>
                    <div className="project-box">
                    </div>
                    <div className="project-text">
                        <h2>Spotify Product Design</h2>
                        <p>A site I made myself, written in css.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Projects)