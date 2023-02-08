import React from 'react';

import './introPhrase.css';




export default function IntroPhrase() { 
    return (
    <>
            <section className='section-phrase vh'>
                <div className='section-phrase__container'>
                    <p className='section-phrase__container__ph'>Designer, layout artist and lover of my work. Currently I am dedicated to analyse and design websites, in my free time I help companies to layout websites as well as graphic design work. </p>
                    <button className='section-phrase__container__cta'><a className='link-anchor' href='#works'>SEE MY PROJECTS</a></button>
                </div>
            </section> 

    </>

    );

}