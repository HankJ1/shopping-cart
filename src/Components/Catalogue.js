import React from 'react';
import { Link } from 'react-router-dom'

const Catalogue = props => {

    const items = catalogueItems;

    return (
        <div>
            <div className='section-header'>Catalogue</div>
            <div className="catalogue-grid">
                {
                    items.map((el, index) => {
                           return (
                                <Link to={`/catalogue/${el.description}`}>
                                    <Card description={el.description} points={el.points} price={el.price} url={el.url} key={index}></Card>
                                </Link>
                           )
                    }) 
                }
            </div>
        </div>
    )
}

const Card = props => {

    return (
        <div>
            <div className='card-container'>
                <div className='card-image-container'>
                    <img src={props.url} className="card-image" />
                </div>
                <div className='card-description'>{props.description}
                <ul className='points'>
                {
                    props.points.map((point, index) => {
                        return (
                            <li className="point-item">{point}</li>
                        )
                    })
                }
                </ul>
                </div>
                <div className="card-description card-price">{props.price}</div>
            </div>
        </div>
    )
}

export const catalogueItems = [
    {
        description: "Wooden Crib",
        price: "39.99",
        url: "./images/products/crib.jpg",
        quantity: 1
    },
    {
        description: "Brand New Laptop",
        price: "2200.00",
        url: "./images/products/dented-laptop.jpeg",
        quantity: 1
    },
    {
        description: "Lightly Used Mattress",
        price: "99.99",
        url: "./images/products/old-mattress.jpg",
        quantity: 1
    },
    {
        description: "Odor Resistant Sock",
        price: "19.99",
        url: "./images/products/old-sock.jpeg",
        quantity: 1
    },
    {
        description: "Prime Sirloin",
        price: "22.99",
        url: "./images/products/old-steak.jpg",
        quantity: 1
    },
    {
        description: "Original Art",
        price: "499.00",
        url: "./images/products/sketch-art.jpg",
        quantity: 1
    },
    {
        description: "One of Those Talking Fish",
        price: "29.99",
        url: "./images/products/talking-fish.jpg",
        quantity: 1
    },
    {
        description: "Van Goh Original",
        price: "50000.00",
        url: "./images/products/van-ghoh.jpg",
        quantity: 1
    },
]

export default Catalogue;