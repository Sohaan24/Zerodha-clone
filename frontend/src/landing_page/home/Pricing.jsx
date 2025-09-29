function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row text-start p-5'>
                <div className='col-md-6'>
                    <h3>Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{color : "#4490d8" }}>See pricing</a>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <span className='col-4'>
                            <img src='media/pricing0.svg'></img>
                            <p className='text-muted' style={{fontSize : "12px"}}>Free account opening</p>
                        </span>
                        <span className='col-4'><img src='media/pricing0.svg'></img>
                            <p className='text-muted' style={{fontSize : "12px"}}>Free equity delivery and direct mutual funds</p>
                        </span>
                        <span className='col-4'><img src='media/intradayTrades.svg'></img>
                            <p className='text-muted' style={{fontSize : "12px"}}>Intraday an F&O</p>
                        </span>
                    </div>    
                </div>
            </div>
             
        </div> 
       
    );
}

export default Pricing;