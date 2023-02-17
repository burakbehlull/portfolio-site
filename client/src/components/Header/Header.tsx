import developerImg from '../../Assets/developerImg.avif'; 
const Header: React.FC = ()=> {

    return(
        <section id="header">
            <div className="header-box">
                <div className='header-text'>
                <h1>Hello<br />I am a Developer</h1>
                <p>I am interested in the field of web development and<br/>I am a Designer as well as a blogger.</p>
                </div>
                <img src={developerImg} alt="header page developer image" />
            </div>
        </section>
    )
}

export default Header