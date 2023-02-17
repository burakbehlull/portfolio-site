import developerImg from '../../Assets/developerImg.avif';
const Header: React.FC = ()=> {
    return(
        <section id="header">
            <div className="header-box">
                <div className='header-text'>
                <h1>Hello<br />I am Developer</h1>
                <p>xd</p>
                </div>
                <img src={developerImg} alt="header page developer image" />
            </div>
        </section>
    )
}

export default Header