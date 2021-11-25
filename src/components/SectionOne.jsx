import React from 'react';
import pic1 from './img/pic1.svg'

const SectionOne = () => {
    return (
        <section className='main_one'>
            <div className='main_one-text'>
                <p>Let’s <span>imagine</span> it <br />
                Let’s make it <span>happen</span></p>
                <a className='main_one-button' href="#">Know About Me</a>
            </div>
            <img src={pic1} alt="This is a pic of Flork saying hello" />
        </section>
    )
}

export default SectionOne
