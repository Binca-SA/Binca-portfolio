import React from "react";
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
    <div className='container-front-section__fixed__front'>
        <div className='container-front-section__fixed__front__goals'>
            <div className="cont-subtitles">
                <h3 className="subtitles-work">Goals </h3>
            </div>
            <ul className='container-front-section__fixed__front__goals__txt'>
                <li className="" key={front.frontGoal}>{ front.frontGoal }</li>
            </ul>
        </div> 
        <div className='container-front-section__fixed__front__bestPracices'>
            <div className="cont-subtitles">
                <h3 className="subtitles-work">Best practices </h3>
            </div>
            <ul className='container-front-section__fixed__front__goals__txt'>
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
            </div>
            <ul className='  container-front-section__fixed__front__goals__txt'>
                <li className="" key={front.WebOnLive}><a href={ front.WebOnLive }>LINK</a></li>
            </ul>
        </div>
        <div className='container-front-section__fixed__front__git'>
            <div className="cont-subtitles">
                <h3 className="subtitles-work">Check the code</h3>
            </div>
            <ul className='  container-front-section__fixed__front__goals__txt'>
                <li className="" key={front.Git}><a href={ front.Git }>GITHUB</a></li>
            </ul>
        </div>
    </div>
    </>
    )
}
    export default FrontWorks;