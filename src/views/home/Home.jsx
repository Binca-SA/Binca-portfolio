import React from 'react';
import IntroHome from '../../components/intro-home/IntroHome';
import './home.css';
import IntroPhrase from '../../components/intro-phrase/IntroPhrase';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
// import GetWorks from '../../components/card-work/Card';

export default function Home() { 
    return <section className='section-home'>
                <IntroHome></IntroHome>
                <IntroPhrase></IntroPhrase>
                {/* <GetWorks></GetWorks> */}
                <Contact></Contact>
                <Footer></Footer>

</section> }