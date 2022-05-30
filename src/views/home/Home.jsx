import React from 'react';
import IntroHome from '../../components/intro-home/IntroHome';
import './home.css';
import IntroPhrase from '../../components/intro-phrase/IntroPhrase';
import GetWorks from '../../components/card-work/Card';
import BgColour from '../../components/bg-colour-btns/BgColour';


export default function Home() { 
    return <section className='section-home'>
                <IntroHome></IntroHome>
                <IntroPhrase></IntroPhrase>
                <GetWorks></GetWorks>   
                <BgColour></BgColour>
            </section>
}