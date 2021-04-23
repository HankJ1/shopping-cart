import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Routes from '../Routes';
import {catalogueItems} from './Catalogue';

const FocusedItem = (props) => {

    const [imgURL, setImgURL] = useState("apples");
    const [price, setPrice] = useState("0.00");
    const [catIndex, setCatIndex] = useState(0);

    // console.log(props);

    useEffect(() => {
        findInfo();
    }, []);

    const handleClick = () => {
        props.addToBag();
        itemToLocalStorage();
    }

    const itemToLocalStorage = () => {
        let cart = JSON.parse(localStorage.getItem('hankShoppingCart'));
        let dupeCounter = 0;
        cart.find(el => {
            if(el.description == catalogueItems[catIndex].description) {
                el.quantity = el.quantity + 1;
                dupeCounter++;
            }
        });
        if(dupeCounter == 0) {
            cart.push(catalogueItems[catIndex]);
        }
        
        localStorage.setItem('hankShoppingCart', JSON.stringify(cart));
    }

    const findInfo = () => {
        catalogueItems.find((el, index) => {
            if(el.description == props.match.params.id) {
                setPrice(el.price);
                let finalString = el.url.substring(1);
                finalString = "/shopping-cart" + finalString;
                setImgURL(finalString);
                // setImgURL(el.url);
                setCatIndex(index);
            }
        })
    }

    return (
        <div>
            <div className='homepage-grid'>
                <div className='focused-image-container'>
                    <img src={imgURL} className='focused-image'></img>
                </div>
                <div className='focused-description-flex'>
                    <div className='focused-description'>{props.match.params.id}</div>
                    <div className='focused-price'>USD: {price}</div>
                    <button className='add-to-cart-button' onClick={handleClick}>Add to Cart</button>
                    <br></br>
                    <Link to='/catalogue'>
                        <span className="go-back">Back to Browse</span>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default withRouter(FocusedItem);