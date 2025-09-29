import React from 'react';
function RightSection({
    title,
    description,
    learnMore,
    imageURL
}) {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 p-5 mt-5'>
                     <h3>{title}</h3>
                    <p className='text-start p-5 text-muted' style={{lineHeight: "1.8"}}>{description}</p>
                    <a href = {learnMore} style={{color : "#1984d7"}}> Learn more</a>
                </div>
                <div className='col-6'>
                    <img src= {imageURL}></img>
                </div>
            </div>
        </div>
    )
}

export default RightSection;
