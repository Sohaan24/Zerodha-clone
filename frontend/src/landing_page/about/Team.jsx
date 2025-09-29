import React from 'react';

function Team(){
    return(
         <div className='container'>
            <div className='row p-5 mt-5'>
                <h3 className='text-center text-muted'>
                    People
                </h3>
            </div>

            <div className='row p-5 mt-3 ms-5'>
                <div className='col-1'></div>
                <div className='col-5 text-start'>
                    <img src='media/nithinKamath.jpg' style={{borderRadius : "100%", width : "60%"}}></img> <br></br> <br>

                    </br>
                    <h5 className='text-muted ms-5' >Nithin Kamath</h5>
                    <h6 className='text-muted ms-5'> Founder,CEO</h6>
                </div>
                
                <div className='col-5 text-start'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p> Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}
export default Team ;