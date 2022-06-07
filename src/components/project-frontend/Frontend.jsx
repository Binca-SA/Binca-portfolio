import React from "react";
import './frontend.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



function FrontWorks(){

    const [front, setFront] = useState({});

    const parameters = useParams();
    //getting json//
    useEffect(() => {
        axios.get('/json/works.json')
            .then(response => {
                const selectedProject = response.data.find(project => project.id === parameters.id)
                setFront(selectedProject)
            });
    }, [])


    return (
    <>
        <section className='container-front-section mobile-margin padding-top'>
            <div className='container-front-section__intro'>
                <h1 className="container-front-section__title main-titles" key={front.name}>{ front.name }</h1>
                <p className="container-front-section__p atom-margin-link" key={front.introduction}>{front.introduction}</p>
                <video src={front.video} type="video/mp4" controls autoplay muted>
                    <source src={front.video} type="video/mp4"></source>
                </video>
            </div>

            <div className='container-front-section__fixed'>
                <div className='container-front-section__fixed__cont-btns'>
                    <button className='container-front-section__fixed__cont-btns__btns'>UX | UI</button>
                    <button className='container-front-section__fixed__cont-btns__btns'>Frontend</button>
                </div>
                
                <div className='container-front-section__fixed__ux'>
                    <div className='container-front-section__fixed__ux__goals'>
                        <div className="cont-subtitles">
                            <h3 className="subtitles-work">Goals </h3>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                            </svg>
                        </div>
                        <ul className='  container-front-section__fixed__ux__goals__txt'>
                            <li className="" key={front.goal1}>{ front.goal1 }</li>
                            <li className="" key={front.goal2}>{ front.goal2 }</li>
                        </ul>
                    </div> 
                    <div className='container-front-section__fixed__ux__methodologies'>
                        <div className="cont-subtitles">
                            <h3 className="subtitles-work">Methodologies </h3>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                            </svg>
                        </div>
                        <ul className='  container-front-section__fixed__ux__methodologies__txt'>
                            <li className="" key={front.methodologies1}>{ front.methodologies1 }</li>
                            <li className="" key={front.methodologies2}>{ front.methodologies2 }</li>
                        </ul>
                    </div>
                    <div className='container-front-section__fixed__ux__bestPractices'>
                        <div className="cont-subtitles">
                            <h3 className="subtitles-work">Best Practices </h3>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                            </svg>
                        </div>
                        <ul className='  container-front-section__fixed__ux__bestPractices__txt'>
                            <li className="" key={front.bestPractices1}>{ front.bestPractices1 }</li>
                            <li className="" key={front.bestPractices2}>{ front.bestPractices2 }</li>
                            <li className="" key={front.bestPractices3}>{ front.bestPractices3 }</li>
                            <li className="" key={front.bestPractices4}>{ front.bestPractices4 }</li>
                            <li className="" key={front.bestPractices5}>{ front.bestPractices5 }</li>
                        </ul>
                    </div>
                    <div className='container-front-section__fixed__ux__wireframes'>
                        <div className="cont-subtitles">
                            <h3 className="subtitles-work">Wireframes </h3>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                            </svg>
                        </div>
                        <img key={front.wireframes} className='' src={front.wireframes}></img>
                        
                    </div>
                </div>

                <div className='container-front-section__fixed__front'>
                <div className='container-front-section__fixed__front__goals'>
                    <div className="cont-subtitles">
                        <h3 className="subtitles-work">Goals </h3>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                        </svg>
                    </div>
                    <ul className='  container-front-section__fixed__front__goals__txt'>
                        <li className="" key={front.frontGoal}>{ front.frontGoal }</li>
                    </ul>
                </div> 
                <div className='container-front-section__fixed__front__bestPracices'>
                    <div className="cont-subtitles">
                        <h3 className="subtitles-work">Best practices </h3>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                        </svg>
                    </div>
                    <ul className='  container-front-section__fixed__front__goals__txt'>
                        <li className="" key={front.bestPracticesF1}>{ front.bestPracticesF1 }</li>
                        <li className="" key={front.bestPracticesF2}>{ front.bestPracticesF2 }</li>
                        <ul key={front.scss}>{ front.scss}
                            <li key={front.scss1}> {front.scss1}</li>
                            <li key={front.scss2}> {front.scss2}</li>
                            <li key={front.scss3}> {front.scss3}</li>
                            <li key={front.scss4}> {front.scss4}</li>
                        </ul>
                        <ul key={front.html}>{ front.html}
                            <li key={front.html1}> {front.html1}</li>
                            <li key={front.html2}> {front.html2}</li>
                        </ul>
                        <ul key={front.js}>{ front.js}
                            <li key={front.js1}> {front.js1}</li>
                            <li key={front.js2}> {front.js2}</li>
                            <li key={front.js3}> {front.js3}</li>
                        </ul>
                    </ul>
                </div> 
                <div className='container-front-section__fixed__front__url'>
                    <div className="cont-subtitles">
                        <h3 className="subtitles-work">Web on live </h3>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                        </svg>
                    </div>
                    <ul className='  container-front-section__fixed__front__goals__txt'>
                        <li className="" key={front.WebOnLive}><a href={ front.WebOnLive }>LINK</a></li>
                    </ul>
                </div>
                <div className='container-front-section__fixed__front__git'>
                    <div className="cont-subtitles">
                        <h3 className="subtitles-work">Check the code</h3>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                        </svg>
                    </div>
                    <ul className='  container-front-section__fixed__front__goals__txt'>
                        <li className="" key={front.Git}><a href={ front.Git }>GITHUB</a></li>
                    </ul>
                </div>
            </div>
            <div className='container-front-section__imgs'>
                {/* <img className='' src={front.img}></img> */}
            </div>
            </div>
        </section>
    </>
    )
}
export default FrontWorks;