import React from 'react';
import IntroHome from '../../components/intro-home/IntroHome';
import './home.css';
import IntroPhrase from '../../components/intro-phrase/IntroPhrase';
import GetWorks from '../../components/card-work/Card';
import BgColour from '../../components/bg-colour-btns/BgColour';
import { useState } from 'react';
import Contact from '../../components/contact/Contact';

export default function Home() {
    const [backgroundColor, setBackgroundColor] = useState("#DCD6EB");
    
    const setStyle = (color) => {
        setBackgroundColor(color);
    };

    return <section className='section-home' style={{ background: backgroundColor }}>
                <IntroHome></IntroHome>
                <IntroPhrase></IntroPhrase>
                <GetWorks></GetWorks>
                <Contact></Contact>
                <BgColour changeColor={setStyle}></BgColour>
            </section>
}