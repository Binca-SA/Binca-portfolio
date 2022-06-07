import React from 'react';
import './contact.css';



export default function Contact() { 
    return <section className='section-contact'>
                <div className='flex-desk'>
                    <div className='container-title'>
                        <h5 className='container-title__title'>If you want to<br></br> ask,<br></br> create or<br></br> collaborate <span>...</span></h5>
                        <a className='container-title__cta txt-bold' href='mailto:binca.codesign@gmail.com'>SEND ME AN E-MAIL</a>
                    </div>
                    <div className='flex-desk__row'>
                        <div className='container-cv containers-p-contact'>
                            <p className='container-cv__p text-size margin-top'>THANKS FOR YOUR VISIT!</p>
                            <button className=' container-cv__link style-link'>CHECK MY CV</button>
                        </div>
                        <div className='container-social containers-p-contact atom-margin-bottom'>
                            <p className='container-social__p text-size margin-top-double'>FOLLOW MY ADVENTURES</p>
                            <ul className='container-social__links'>
                                <li className='container-social__link style-link'><a className='style-link' href="https://www.linkedin.com/in/binca-shinaasi-0b9792206/">INSTAGRAM</a></li>
                                <li className='container-social__links style-link'><a className='style-link' href="https://www.instagram.com/binca_22/">LINKEDIN</a></li>
                                <li className='container-social__links style-link'><a className='style-link' href="https://github.com/Binca-SA">GITHUB</a></li>
                                <li className='container-social__links style-link'><a className='style-link' href="https://codepen.io/binca-sa">CODEPEN</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
</section>
}
