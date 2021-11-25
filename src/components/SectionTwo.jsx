import React from 'react';
import pic2 from './img/pic2.svg';
import css from './img/logos/css.png';
import estrella from './img/logos/estrella.png';
import html from './img/logos/html.png';
import illustrator from './img/logos/illustrator.png';
import javascript from './img/logos/javascript.png';
import photoshop from './img/logos/photoshop.png';
import reactLogo from './img/logos/react.png';
import universe from './img/logos/universe.png';

const SectionTwo = () => {
    return (
        <section className='main_two'>
            <section className='main_two-texts'>
                <p className='main_two-texts-1'>I am a Junior Frontend Develper and Computer Network Technician
                who is always looking to learn something new.</p>
                <p>Currently, I’m learning about React and I want to learn more about
                backend technologies.</p>
                <p>By the way, I can use some design tools like Figma, Photoshop and 
                Ilustrator and I am the social media manager of a local coffee shop.</p>
            </section>
            <section className='main_two-pics'>
                <section className='main_two-pics-logos'>
                    <img src={css} alt="" srcset="" />
                    <img src={estrella} alt="" />
                    <img src={html} alt="" />
                    <img src={illustrator} alt="" />
                    <img src={javascript} alt="" />
                    <img src={photoshop} alt="" />
                    <img src={reactLogo} alt="" />
                    <img src={universe} alt="" />
                </section>
                <img className='main_two-pics-guy' src={pic2} alt="" />
            </section>
        </section>
    )
}

export default SectionTwo
