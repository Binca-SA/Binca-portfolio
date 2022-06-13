import React from 'react';
import { Animator, batch, Fade, FadeIn, Move, ScrollPage, Sticky, Zoom, ZoomOut } from 'react-scroll-motion';
import './introPhrase.css';
import { ScrollContainer } from 'react-scroll-motion';



export default function IntroPhrase() { 
    return <ScrollContainer>
                {/* <ScrollPage page={0}>
                    <Animator >
                        <section className='section-phrase vh'>
                            <div className='section-phrase__container'>
                                <p className='section-phrase__container__ph'>The essence of all my projects is <b>dedication</b>,<br></br> 
                                I always try to bring <b>efficiency</b>, <b>creativity</b> and <b>innovation</b>.</p>
                                <button className='section-phrase__container__cta'>SEE MY PROJECTS</button>
                            </div>
                        </section> 
                    </Animator>
                </ScrollPage> */}

                <ScrollPage page={1}>
                    <Animator animation={Zoom(0, 20)}>
                        <section className='section-phrase vh'>
                            <div className='section-phrase__container'>
                                <p className='section-phrase__container__ph'>The essence of all my projects is <b>dedication</b>,<br></br> 
                                I always try to bring <b>efficiency</b>, <b>creativity</b> and <b>innovation</b>.</p>
                                <button className='section-phrase__container__cta'>SEE MY PROJECTS</button>
                            </div>
                        </section> 
                    </Animator>
                </ScrollPage>
                
            </ScrollContainer>
}