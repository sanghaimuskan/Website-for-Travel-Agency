import React from 'react'
import '../App.css';
import Button from './Button'
import './Hero.css';
function Hero() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1> Your Paradise Awaits</h1>
            <p> What are you waiting for?</p>
           <div className = "hero-btns">
               <Button className="btns" buttonStyle ="btn--outline" buttonSize="btn--large"> GET STARTED</Button>
            </div> 
            <div className = "hero-btns">
               <Button className="btns" buttonStyle ="btn--primary" buttonSize="btn--large" onClick = "window.href='www.google.com'"> WATCH Trailer <i className= 'far fa-play-circle' /> </Button>
            </div> 
        </div>
    )
}

export default Hero
