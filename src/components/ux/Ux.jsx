import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";



function UxWorks(){

    const [ux, setUx] = useState({});

    const parameters = useParams();
    //getting json//
    useEffect(() => {
        axios.get('/json/works.json')
            .then(response => {
                const selectedProject = response.data.find(project => project.id === parameters.id)
                setUx(selectedProject)
            });
    }, [])

    return (
    <>
    <div className='container-front-section__fixed__ux'>
        <div className='container-front-section__fixed__ux__goals'>
            <div className="cont-subtitles">
                <h3 className="subtitles-work">Goals </h3>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                </svg>
            </div>
            <ul className='  container-front-section__fixed__ux__goals__txt'>
                <li className="" key={ux.goal1}>{ ux.goal1 }</li>
                <li className="" key={ux.goal2}>{ ux.goal2 }</li>
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
                <li className="" key={ux.methodologies1}>{ ux.methodologies1 }</li>
                <li className="" key={ux.methodologies2}>{ ux.methodologies2 }</li>
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
                <li className="" key={ux.bestPractices1}>{ ux.bestPractices1 }</li>
                <li className="" key={ux.bestPractices2}>{ ux.bestPractices2 }</li>
                <li className="" key={ux.bestPractices3}>{ ux.bestPractices3 }</li>
                <li className="" key={ux.bestPractices4}>{ ux.bestPractices4 }</li>
                <li className="" key={ux.bestPractices5}>{ ux.bestPractices5 }</li>
            </ul>
        </div>
        <div className='container-front-section__fixed__ux__wireframes'>
            <div className="cont-subtitles">
                <h3 className="subtitles-work">Wireframes </h3>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E8464E"/>
                </svg>
            </div>
            <img key={ux.wireframes} className='' src={ux.wireframes}></img>
        </div>
    </div>
    </>
    )
}
    export default UxWorks;