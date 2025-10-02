import { useNavigate } from 'react-router-dom';
function OpenAccount() {

  const navigate = useNavigate();
  const handleSignupClick = () => {
    
        navigate('/signup');
    };
    return (
          <div className='container p-5 mb-5'>
            <h2 className='mb-3 mt-1'>Open a Zerodha account</h2>
            <p className='fs-5 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button className='mt-4 btn btn-lg mb-5' style={{ backgroundColor: "#1984d7", color: "white" }} onClick={handleSignupClick}>Sign up for free</button>
        </div>
        );
}

export default OpenAccount;
