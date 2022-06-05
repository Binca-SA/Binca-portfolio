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
                        <ul className=' list container-front-section__fixed__ux__goals__txt'>
                            <li className="list" key={front.goal1}>{ front.goal1 }</li>
                            <li className="list" key={front.goal2}>{ front.goal2 }</li>
                        </ul>
                    </div> 
                    <div className='container-front-section__fixed__ux__methodologies'>
                        <div className="cont-subtitles">
                            <h3 className="subtitles-work">Methodologies </h3>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                            </svg>
                        </div>
                        <ul className=' list container-front-section__fixed__ux__methodologies__txt'>
                            <li className="list" key={front.methodologies1}>{ front.methodologies1 }</li>
                            <li className="list" key={front.methodologies2}>{ front.methodologies2 }</li>
                        </ul>
                    </div>
                    <div className='container-front-section__fixed__ux__bestPractices'>
                        <div className="cont-subtitles">
                            <h3 className="subtitles-work">Best Practices </h3>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                            </svg>
                        </div>
                        <ul className=' list container-front-section__fixed__ux__bestPractices__txt'>
                            <li className="list" key={front.bestPractices1}>{ front.bestPractices1 }</li>
                            <li className="list" key={front.bestPractices2}>{ front.bestPractices2 }</li>
                            <li className="list" key={front.bestPractices3}>{ front.bestPractices3 }</li>
                            <li className="list" key={front.bestPractices4}>{ front.bestPractices4 }</li>
                            <li className="list" key={front.bestPractices5}>{ front.bestPractices5 }</li>
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
            </div>

            <div className='container-front-section__fixed__front'>
                <div className='container-front-section__fixed__front__goals'>
                    <div className="cont-subtitles">
                        <h3 className="subtitles-work">Goals </h3>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                        </svg>
                    </div>
                    <ul className=' list container-front-section__fixed__front__goals__txt'>
                        <li className="list" key={front.frontGoal}>{ front.frontGoal }</li>
                    </ul>
                </div> 
                
            </div>

            <div className='container-front-section__imgs'>
                {/* <img className='' src={front.img}></img> */}
            </div>
        </section>
    </>
    )
}
export default FrontWorks;