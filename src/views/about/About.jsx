import React from 'react';
import './about.css';
import { Link } from 'react-router-dom'
// import Header from '../../components/header/Header';
// import Contact from '../../components/contact/Contact';
export default function About() {

    return<> 
    <section className='container-about mobile-margin  padding-top ' >
        {/* <Header></Header> */}
        
            <h1 className='container-about__title main-titles'>5 facts <br></br>about me <span className='subtitle-style'>TO KNOW <br></br>ME BETTER</span></h1>
            <div className='flex-desk-resp marg-top-about'>
                <img className='container-about__img' src='images/about/profile.jpg' alt='profile image of Binca'></img>
                <div className='container-about__facts-container'>
                    <div className='container-about__facts-container__container-text'><span className='style-numbers'>1</span><p className='margin-top-bottom'>I started my career in the world of art and there i discovered 
                        graphic design, after my career I specialized 
                        in digital design and web programming.</p>
                        
                    </div>
                    
                    <div className='container-about__facts-container__container-text'><span className='style-numbers'>2</span><p className='margin-top-bottom'>I am a naturally inquisitive person, so i make a lot of questions no matter what the point is.</p>
                    </div>

                    <div className='container-about__facts-container__container-text'><span className='style-numbers'>3</span><p className='margin-top-bottom'>In my free time I do sport. I like it because sport is synonymous of technique, perseverance and effort, but that doesn’t  mean that I don’t accept a glass of wine.</p>
                    </div>

                    <div className='container-about__facts-container__container-text'><span className='style-numbers'>4</span><p className='margin-top-bottom'>Adjectives that define me: perfectionist, daring, creative and organized.</p>
                    </div>

                    <div className='container-about__facts-container__container-text'><span className='style-numbers'>5</span><p className='margin-top-bottom'>Macarrons lover</p>
                    </div>
                </div>
            </div>
        
        <div className='flex  desk-padding'>
            <h2 className='main-titles rotation margin-top margin-bottom'>Experience</h2>
            <div className='flex-center'>
                <p className='max-width-p'>I started in the digital world with my studies in Graphic Design. 
                I love layout and design web pages. I like using Figma and SCSS. Another of my hobbies is the user experience 
                in the digital world, creating a friendly and understandable environment for all audiences. My goal is to improve my skills 
                and expand my knowledge, especially in web accessibility and learn more about CSS architecture to make scalable and maintainable 
                projects.</p>
                <section className='container-about__container-dates margin-top'>
                    <div className='container-about__container-dates__circle'></div>
                    <p className=''><span>Jun. 2021 - Sept. 2021</span><br></br>
                        <b>Mediterrànnia Creativa -<br></br> Advertising and marketing agency</b>
                        <br></br>Intership as Graphic designer<br></br>and content creator for social media.
                    </p>
                </section>
                <section className='container-about__container-dates margin-top'>
                    <div className='container-about__container-dates__circle'></div>
                    <p className=''><span>Actually</span><br></br>
                        <b>Live4Life - Online platform for student renting</b>
                        <br></br>UX | UI designer <br></br>
                        <p>Responsible for the user experience of the UI of the company's online platform.<br></br>
                        Layout and implementation of the previous phases of design and creation of components with SASS and Vue. </p>
                        <br></br>
                        {/* <Link className='cta-btn-red color-red' to="/live">> View project</Link> */}
                        <a className='cta-btn-red color-red' href='https://live4life.site/' target={'_blank'}>> View website</a>
                    </p>
                </section>
                <section className='container-about__container-dates margin-top'>
                    <div className='container-about__container-dates__circle'></div>
                    <p className=''><span>Actually</span><br></br>
                        <b>Ananda - Clothing and accessories shop</b>
                        <br></br>Content Creator <br></br>
                        <p>Responsible for the shop's Instagram, doing modeling and product photography, reels.<br></br> At the same time interacting with users through stories, creating polls, questions and live videos.  </p>
                        <br></br>
                        <a className='cta-btn-red color-red' href='https://www.instagram.com/ananda_altea/' target={'_blank'}>> View INSTAGRAM</a>
                    </p>
                </section>
            </div>
        </div>

        <div className='flex-end desk-padding'>
            <div className='container-about__tools margin-top'>
                <p className='container-about__tools__title'>UX | UI tools</p>
                <ul className='container-about__tools__list'>
                    <li>FIGMA</li>
                    <li>MIRO</li>
                    <ul>
                        <b>ADOBE PACK</b>
                        <li>Premiere</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>After effects</li>
                        <li>Indesign</li>
                    </ul>
                </ul>
            </div>

            <div className='container-about__tools margin-top'>
                <p className='container-about__tools__title'>FRONTEND tools</p>
                <ul className='container-about__tools__list'>
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>Prepros</li>
                    <li>MAMP</li>
                    <li>SCSS</li>
                    <li>SCSS</li>
                    <li>Github</li>
                    <li>Git Bash</li>
                    <ul>
                        <b>Frontend frameworks for component creation and styling:</b>
                        <li>React</li>
                        <li>Vue</li>
                    </ul>
                </ul>
            </div>
        </div>
        <div className='flex-column'>
            <div className='margin-top-desk desk-padding'>
                <h2 className='main-titles margin-top margin-bottom'>education</h2>
                <div className='row-flex'>
                    <div className='container-about__container-dates'>
                        <div className='container-about__container-dates__circle'></div>
                        <p>2021-2022<br></br><b>MASTER ID3: UX|UI DESIGN,<br></br>FRONT-END & DIGITAL MARKETING</b><br></br>ESAT, VALENCIA</p>
                    </div>
                    <div className='container-about__container-dates'>
                        <div className='container-about__container-dates__circle'></div>
                        <p>2017-2021<br></br><b>FINE ARTS & GRAPHIC DESIGN<br></br>DEGREE</b><br></br>UNIVERSIDAD MIGUEL<br></br>HERNÁNDEZ, ALTEA</p>
                    </div>
                </div>
            </div>
        
            <div className='margin-top-desk'>
                <h2 className='main-titles margin-top margin-bottom'>key<br></br>skills</h2>
                <div className='row-gap '>
                    <div className='container-about__container-skills'>
                        <div className='container-about__container-skills__circle'></div>
                        <li className='list'>Design system</li>
                    </div>
                    <div className='container-about__container-skills'>
                        <div className='container-about__container-skills__circle'></div>
                        <li className='list'>Figma prototyping</li>
                    </div>
                    <div className='container-about__container-skills'>
                        <div className='container-about__container-skills__circle'></div>
                        <li className='list'>User experience design</li>
                    </div>
                    <div className='container-about__container-skills'> 
                        <div className='container-about__container-skills__circle'></div>
                        <li className='list'>User interface design</li>
                    </div>
                    <div className='container-about__container-skills'>
                        <div className='container-about__container-skills__circle'></div>
                        <li className='list'>BEM methodology</li>
                    </div>
                    <div className='container-about__container-skills'>
                        <div className='container-about__container-skills__circle'></div>
                        <li className='list'>Accesibility atention</li>
                    </div>
                    <div className='container-about__container-skills'>
                        <div className='container-about__container-skills__circle'></div>
                        <li className='list'>Atention to detail</li>
                    </div>
                    <div className='container-about__container-skills'>
                        <div className='container-about__container-skills__circle'></div>
                        <li className='list'>Creative resolution</li>
                    </div>
                    <div className='container-about__container-skills'>
                        <div className='container-about__container-skills__circle'></div>
                        <li className='list'>Adaptability to change</li>
                    </div>
                    <a className='cta-btn-red' href='https://www.linkedin.com/in/binca-shinaasi-0b9792206/' target={'_blank'}>> See more skills on LINKEDIN</a>
                    
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </section>
    {/* <Contact></Contact> */}
    </>
    }
