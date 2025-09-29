function Education() {
    return ( 
        <div className='container p-1'>
            <div className='row p-5'>
                <div className='col-md-6'>
                    <img className='text-start' src='media/education.svg' style={{width: "90%", marginBottom:"2rem"}}></img>
                </div>
                <div className='col-md-6 text-start'>
                    <h3>Free and open market education</h3>
                    <br>
                    </br>
                    <p>
                        Varsity, the largest online stock market education book in the world covering
                         everything from the basics to advanced trading. 
                    </p>
                    <a  style={{color : "#4490d8" }}>Varsity </a>
                    <br>
                    </br>
                    <p>TradingQ&A, the most active trading and investment community in India for all
                     your market related queries.
                    </p> 
                    <a  style={{color : "#4490d8" }}>TradingQ&A</a>
                </div>
            </div>
        </div>
     );
}

export default Education;