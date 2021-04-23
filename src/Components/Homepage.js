import React, {useState, useEffect} from 'react'

const Homepage = () => {

    useEffect(() => {

    }, [])

    return (
        <div>
            <div className="homepage-grid">
                <div className="title-container">
                    <div className='header-container'>
                        <h1 className="title-span">Jimmy's <br/>Emporium <br/>of Eclectic <br/>Goods </h1>
                    </div>
                    <div className="header-container">
                        <h3 className="slogan-span">You won't believe<br/>what we've got</h3>
                    </div>
                    
                </div>
                <div className="image-container">
                    <img src="./images/high-quality-robber.png" className="robber-image" />
                </div>
            </div>
        </div>
    )
}

export default Homepage;