function LeftSection({
    imageURL,
     title,
      description,
       tryDemo,
        learnMore,
         googlePlay,
          appStore
        }){
    return(
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src= {imageURL}></img>
                </div>
                <div className='col-6'>
                    <h3>{title}</h3>
                    <p className='text-start p-5 text-muted' style={{lineHeight: "1.8"}}>{description}</p>
                    <a href = {tryDemo} style={{color : "#1984d7"}}> Try Demo</a> &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href = {learnMore} style={{color : "#1984d7"}}> Learn More</a><br></br> <br></br>
                    <a href={googlePlay}><img src='media/googlePlayBadge.svg'></img></a>&nbsp; &nbsp;
                    <a href={appStore}><img src='media/appstoreBadge.svg'></img></a>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;