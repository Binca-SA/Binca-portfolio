import React from 'react';
import './about.css';
// import Header from '../../components/header/Header';

export default function About() {

    return <section className='container-about mobile-margin ' >
        {/* <Header></Header> */}
        <h1 className='container-about__title main-titles'>5 facts <br></br>about me <span className='subtitle-style'>TO KNOW <br></br>ME BETTER</span></h1>
        <div className='container-about__facts-container'>
            <div className='container-about__facts-container__container-text'><span className='style-numbers'>1</span><p>I started my career in the world of art and there i discovered 
                graphic design, after my career I specialized 
                in digital design and web programming. <br></br><button className='style-link atom-margin-link'>> VIEW PROJECTS</button></p>
            </div>
            
            <div className='container-about__facts-container__container-text'><span className='style-numbers'>2</span><p>I am a naturally inquisitive person, so i make a lot of questions no matter what the point is.</p>
            </div>

            <div className='container-about__facts-container__container-text'><span className='style-numbers'>3</span><p>In my free time I do sport. I like it because sport is synonymous of technique, perseverance and effort, but that doesn’t  mean that I don’t accept a glass of wine.</p>
            </div>

            <div className='container-about__facts-container__container-text'><span className='style-numbers'>4</span><p>Adjectives that define me: perfectionist, daring, creative and organized.</p>
            </div>

            <div className='container-about__facts-container__container-text'><span className='style-numbers'>5</span><p>Macarrons lover</p>
            </div>
        </div>


        <h2 className='main-titles'>experience</h2>
        <p>I started in the digital world with my studies in Graphic Design. I love layout and design web pages. I like using Figma and SCSS. Another of my hobbies is the user experience in the digital world, creating a friendly and understandable environment for all audiences. My goal is to improve my skills and expand my knowledge, especially in web accessibility and learn more about CSS architecture to make scalable and maintainable projects.</p>
        <div className='container-about__container-experience margin-top'>
            <div className='container-about__container-experience__circle'></div>
            <p><span>Jun. 2021 - Sept. 2021</span><br></br>
                <b>Mediterrànnia Creativa -<br></br> Advertising and marketing agency</b>
            </p>
        </div>
        <br></br>
        <p>Intership as Graphic designer and content creator for social media.</p>
    </section>
    }
