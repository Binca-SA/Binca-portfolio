import React from 'react';
import './about.css';
// import Header from '../../components/header/Header';

export default function About() {

    return<> 
    <section className='container-about mobile-margin  padding-top ' >
        {/* <Header></Header> */}
        <h1 className='container-about__title main-titles'>5 facts <br></br>about me <span className='subtitle-style'>TO KNOW <br></br>ME BETTER</span></h1>
        <div className='flex-desk-resp'>
            <img className='container-about__img' src='/images/about/profile.jpg' alt='profile image of Binca'></img>
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
        </div>
        
        <div className='desk-padding'>
            <h2 className='main-titles margin-top margin-bottom'>experience</h2>
            <div className='flex justify-end'>
                <p className='max-width-p'>I started in the digital world with my studies in Graphic Design. I love layout and design web pages. I like using Figma and SCSS. Another of my hobbies is the user experience in the digital world, creating a friendly and understandable environment for all audiences. My goal is to improve my skills and expand my knowledge, especially in web accessibility and learn more about CSS architecture to make scalable and maintainable projects.</p>
                <div className='container-about__container-dates margin-top'>
                    <div className='container-about__container-dates__circle'></div>
                    <p><span>Jun. 2021 - Sept. 2021</span><br></br>
                        <b>Mediterrànnia Creativa -<br></br> Advertising and marketing agency</b>
                        <br></br>Intership as Graphic designer<br></br>and content creator for social media.
                    </p>
                </div>
            </div>
        </div>

        <div className='container-about__tools margin-top'>
            <p className='container-about__tools__title'>UX | UI tools</p>
            <ul className='container-about__tools__list'>
                <li>FIGMA</li>
                <li>MIRO</li>
                <li>ADOBE PACK</li>
                <ul>
                    <li>premiere</li>
                    <li>photoshop</li>
                    <li>illustrator</li>
                    <li>after effects</li>
                    <li>in design</li>
                </ul>
            </ul>
        </div>

        <div className='container-about__tools margin-top'>
            <p className='container-about__tools__title'>UX | UI tools</p>
            <ul className='container-about__tools__list'>
                <li>HTML</li>
                <li>CSS3</li>
                <li>Prepros</li>
                <li>MAMP</li>
                <li>SCSS</li>
                <li>Javascript</li>
                <ul>
                    <li>Framework: React</li>
                </ul>
                <li>Wordpress</li>
            </ul>
        </div>
        
        <h2 className='main-titles margin-top margin-bottom'>education</h2>
        <div className='container-about__container-dates'>
            <div className='container-about__container-dates__circle'></div>
            <p>2021-2022<br></br><b>MASTER ID3: UX|UI DESIGN,<br></br>FRONT-END & DIGITAL MARKETING</b><br></br>ESAT, VALENCIA</p>
        </div>
        <div className='container-about__container-dates margin-top'>
            <div className='container-about__container-dates__circle'></div>
            <p>2017-2021<br></br><b>FINE ARTS & GRAPHIC DESIGN<br></br>DEGREE</b><br></br>UNIVERSIDAD MIGUEL<br></br>HERNÁNDEZ, ALTEA</p>
        </div>

        <h2 className='main-titles margin-top margin-bottom'>key<br></br>skills</h2>
        <div className='row-gap '>
            <div className='container-about__container-skills'>
                <div className='container-about__container-skills__circle'></div>
                <p>Design system</p>
            </div>
            <div className='container-about__container-skills'>
                <div className='container-about__container-skills__circle'></div>
                <p>Figma prototyping</p>
            </div>
            <div className='container-about__container-skills'>
                <div className='container-about__container-skills__circle'></div>
                <p>User experience design</p>
            </div>
            <div className='container-about__container-skills'> 
                <div className='container-about__container-skills__circle'></div>
                <p>User interface design</p>
            </div>
            <div className='container-about__container-skills'>
                <div className='container-about__container-skills__circle'></div>
                <p>BEM methodology</p>
            </div>
            <div className='container-about__container-skills'>
                <div className='container-about__container-skills__circle'></div>
                <p>Accesibility atention</p>
            </div>
            <div className='container-about__container-skills'>
                <div className='container-about__container-skills__circle'></div>
                <p>Atention to detail</p>
            </div>
            <div className='container-about__container-skills'>
                <div className='container-about__container-skills__circle'></div>
                <p>Creative resolution</p>
            </div>
            <div className='container-about__container-skills'>
                <div className='container-about__container-skills__circle'></div>
                <p>Adaptability to change</p>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </section>
    </>
    }
