import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

function Hero() {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We Ensure education for a better world</h1>
                <p>
                    Our cutting-edge curiculum is designed to empower students with the knowledge.
                    skill and experiences need to exel in the dynamic feild of educaltion
                </p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="icon" /> </button>
            </div>
        </div>
    )
}

export default Hero