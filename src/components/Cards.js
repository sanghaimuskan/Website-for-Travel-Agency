import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards"> 
            <h1> Check out these destinations!</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className = "cards-items">
                        <CardItem src="images/img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path="/services" />
                        <CardItem src="images/img-2.jpg" text="Travel through the islands of Bali" label="Luxury" path="/services" />

                    </ul>
                    <ul className = "cards-items">
                        <CardItem src="images/img-3.jpg" text="Riding the waves, yacht it is!!" label="Luxury" path="/services" />
                        <CardItem src="images/img-4.jpg" text="How about a football match?!" label="Adventure" path="/services" />
                        <CardItem src="images/img-5.jpg" text="Theatres and Theatres" label="Luxury" path="/services" />


                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
