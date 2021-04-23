import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Header = props => {

    const [itemCount, setItemCount] = useState(0);

    return (
        <div>
            <div className="header-grid">
                <Link to="/">
                    <div className="head-container home">Home</div>
                </Link>
                <Link to='/catalogue'>
                    <div className="head-container">Catalogue</div>
                </Link>
                <Link to='/cart'>
                <div className="cart head-container"></div>
                </Link>
                
                <Link to='/cart'>
                <div className="bag-image-container">
                    <img src="./images/bag2.png" className="bag-image" />
                    <span className='item-count'>{props.bagCount}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;