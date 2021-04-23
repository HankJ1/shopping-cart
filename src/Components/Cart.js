import React, {useEffect, useState} from 'react'

const Cart = props => {

    let [items, setItems] = useState([]);
    let [subtotal, setSubtotal] = useState(0.00);

    useEffect(() => {
        parseCart();
    }, [])


    //assign find products in cart from local storage
    const parseCart = () => {
        let cart = JSON.parse(localStorage.getItem('hankShoppingCart'));
        if(cart.length > 0) {
            setItems(cart);
            findSubtotal(cart);
        } else {
            setItems(null);
        }
        
    }

    //handle delete button from child
    const removeItem = (childDescription, quantity, price) => {
        let cart = JSON.parse(localStorage.getItem('hankShoppingCart'));
        let desiredIndex;

        cart.find( (el, index) => {
            if(childDescription == el.description) {
                desiredIndex = index;
            }
        })
        cart.splice(desiredIndex, 1);
        localStorage.setItem('hankShoppingCart', JSON.stringify(cart));

        for(let i = 0; i < quantity; i++ ) {
            props.removeFromBag();
            setSubtotal(prevTote => Math.round(prevTote - parseFloat(price)));
        }
        setItems(cart);
    }

    //udjust subtotal on quantity change
    const adjustSubtotal = (childNum) => {
        console.log(childNum);
        setSubtotal(prevTote => Math.round(prevTote + childNum));
    }

    //find the subtotal
    const findSubtotal = (cart) => {
        let total = 0;
        cart.forEach(item => {
            total += Math.round(((parseFloat(item.price)) * item.quantity));
        });
        setSubtotal(total);
    }

    if(items !== null) {
        return (
            <div>
                <div className='section-header'>Cart</div>
                <div className="catalogue-grid">
                    {
                        items.map((el, index) => {
                               return (
                                        <Card adjust={(something) => adjustSubtotal(something)} description={el.description} price={el.price} url={el.url}
                                        addToBag={() => props.addToBag()} removeFromBag={() => props.removeFromBag()} deleteItem={(desc, quant, price) => removeItem(desc, quant, price)} quantity={el.quantity} key={index}></Card>
                                    
                               )
                        }) 
                    }
                </div>
                <div className='price-container'>
                    <div className='price-output'>Subtotal:  <em>USD {subtotal}</em> </div>
                    <button className='checkout'>Checkout</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className='section-header'>Cart</div>
                <div className="empty-cart"> oops looks like its empty :(</div>
            </div>
        )
             
                
    }
   
}

const Card = props => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log(props.quantity);
        setCount(props.quantity);
    }, [])

    const down = () => {
        if(count >= 1) {
            updateLocalStorage(-1);
            setCount(prevQuant => prevQuant - 1);
            let amount = (parseFloat(props.price)) * -1;
            props.adjust(amount);
            props.removeFromBag();
        }
        else {
            return;
        }
    }

    const up = () => {
        setCount(prevQuant => prevQuant + 1);
        props.addToBag();
        updateLocalStorage(1);
        if(count >= 0) {
            let amount = (parseFloat(props.price));
            props.adjust(amount);
        }
    }

    const deleteItem = () => {
        props.deleteItem(props.description, count, props.price);
    }

    const updateLocalStorage = (plusMinus) => {
        let cart = JSON.parse(localStorage.getItem('hankShoppingCart'));
        cart.find(el => {
            if(el.description == props.description) {
                el.quantity += plusMinus;
            }
        });
        localStorage.setItem('hankShoppingCart', JSON.stringify(cart));
    }

    return (
        <div>
            <div className='card-container'>
                <div className='card-image-container'>
                    <img src={props.url} className="card-image" />
                </div>
                <div className='card-description'>{props.description}</div>
                <div className="card-description card-price">{props.price}</div>
                <div className="card-description remove-item" onClick={deleteItem}>Remove Item</div>
                <div className='quantity-container'>
                    <button className='increment minus' onClick={down}><span className='dumb-span'>-</span></button>
                    <span className='displayed-quantity' >{count}</span>
                    <button className='increment plus' onClick={up}><span className='dumb-span'>+</span></button>
                </div>
            </div>
        </div>
    )
}

export default Cart;