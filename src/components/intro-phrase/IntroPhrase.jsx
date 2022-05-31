import React from 'react';
import './introPhrase.css';


export default function IntroPhrase() { 
    return <section className='section-phrase vh'>
                <div className='section-phrase__container'>
                    <p className='section-phrase__container__ph'>The essence of all my projects is <b>dedication</b>,<br></br> 
                    I always try to bring <b>efficiency</b>, <b>creativity</b> and <b>innovation</b>.</p>
                    <button className='section-phrase__container__cta'>SEE MY PROJECTS</button>
                </div>
            </section> 
}