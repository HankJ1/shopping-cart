import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from './Components/Homepage'
import Header from './Components/Header'
import Catalogue from './Components/Catalogue'
import FocusedItem from './Components/FocusedItem'
import Cart from './Components/Cart'
import './App.css';

const Routes = () => {

    const [bagCount, setBagCount] = useState(0);

    useEffect(() => {
        createLocalStorage()
    }, []);

    const addToBag = () => {
        setBagCount(prevCount => prevCount + 1);
    }

    const removeFromBag = () => {
        setBagCount(prevCount => prevCount - 1);
    }

    const createLocalStorage = () => {
        let cart = localStorage.getItem('hankShoppingCart');
        if(cart == null) {
            let tempArr = [];
            localStorage.setItem('hankShoppingCart', JSON.stringify(tempArr));
        } else {
            cart = JSON.parse(cart);
            let itemCount = 0;
            cart.forEach(el => itemCount += el.quantity)
            setBagCount(itemCount);
        }
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header bagCount={bagCount} />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/catalogue' component={Catalogue} />
                <Route path='/catalogue/:id' render={(props) => (
                    <FocusedItem addToBag={addToBag} />
                )} />
                <Route path='/cart' render={(props) => (
                    ( <Cart addToBag={addToBag} removeFromBag={removeFromBag} />)
                )} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;