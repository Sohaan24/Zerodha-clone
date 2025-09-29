import React from 'react';

function Awards() {
    return (
        <div className='container pb-5'>
            <div className='row text-start p-5'>
                <div className='col-md-6'>
                    <h3>Trust with confidence</h3>
                    <br></br>
                    <h5>Customer-first always</h5>
                    <p className='text-muted fs-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <br></br>
                    <h5>No spam or gimmicks</h5>
                    <p className='text-muted fs-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <br></br>
                    <h5>The Zerodha universe</h5>
                    <p className='text-muted fs-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <br></br>
                    <h5>Do better with money</h5>
                    <p className='text-muted fs-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <img src='/media/ecosystem.png' alt='Ecosystem' className='img-fluid' style={{maxWidth: "110%"}}></img>
                </div>
                <div style={{color : "#4490d8" }} className='text-end p-1' >
                    <a>Explore our products</a> &nbsp; &nbsp;  &nbsp;
                    <a>Try Kite demo</a>
                </div>
            </div>
        </div>
    );
}

export default Awards;