
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate('/signup');
    };
    return (
        <div className='container p-5 mb-3'>
            <div className='row text-center'>
                <img src='/media/homeHero.png' alt='Hero Image' className='mb-4'></img>
            </div>
            <h2 className='mb-3 mt-1'>Invest in everything</h2>
            <p className='fs-5 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='mt-4 btn btn-lg mb-5' style={{ backgroundColor: "#1984d7", color: "white" }} onClick ={handleSignupClick}>Sign up for free</button>
        </div>
   );     
}

export default Hero;