import React from 'react';
function Universe(){
    return(
        <>
            <div>
                <p className="text-muted fs-5">Want to know more about our technology stack? Check out the <a href="#"  style={{color :"#1984d7"}}>Zerodha.tech </a>blog.</p>
            </div>
            <br></br><br></br>
            <h4 className='text-muted'>The Zerodha Universe</h4>
            <p className='fs-5 text-muted mt-4'>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='container mt-3 p-2'>
                <div className='row p-3 mt-5'>
                    <div className='col-4'>
                        <img src= "media/zerodhaFundhouse.png" style={{width: "40%"}} className='mb-2'></img>
                        <p className='text-muted fs-6'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div className='col-4'>
                        <img src= "media/sensibullLogo.svg" style={{width: "40%"}} className='mb-2'></img>
                        <p className='text-muted fs-6'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className='col-4'>
                        <img src= "media/goldenpiLogo.png" style={{width: "40%"}} className='mb-2'></img>
                        <p className='text-muted fs-6'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </div>
                </div>

                <div className='row p-3 mt-2'>
                    <div className='col-md-4'>
                        <img src= "media/streakLogo.png" style={{width: "40%"}} className='mb-2'></img>
                        <p className='text-muted fs-6'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src= "media/smallcaseLogo.png" style={{width: "40%"}} className='mb-2'></img>
                        <p className='text-muted fs-6'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src= "media/dittoLogo.png" style={{width: "30%"}} className='mb-2'></img>
                        <p className='text-muted fs-6'>Personalized advice on line and health insurance. No spam and no mis-selling.</p>
                    </div>
                </div>
            </div>
            <button className='mt-4 btn btn-lg mb-5' style={{ backgroundColor: "#1984d7", color: "white" }}>Sign up for free</button>
            
        </>
        
    )
}
export default Universe;