import React from 'react';
function Hero(){
    return(
        <>
            <h3 className='mt-3'>Charges</h3>
            <p className='text-muted fs-5 mb-5'> List of all charges and taxes</p><br></br>

            <div className='container mt-5 p-5'>
                <div className='row'>
                    <div className='col-4'>
                        <img src = "media/pricing0.svg" alt="pricing" style={{width : "60%"}} />
                        <h3>Free equity delivery</h3>
                        <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='col-4'>
                        <img src = "media/intradayTrades.svg" alt="pricing" style={{width : "60%"}} />
                        <h3>Intraday and F&O trades</h3>
                        <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

                    </div>
                    <div className='col-4'>
                        <img src = "media/pricing0.svg" alt="pricing" style={{width : "60%"}} />
                        <h3>Free direct MF</h3>
                        <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;
