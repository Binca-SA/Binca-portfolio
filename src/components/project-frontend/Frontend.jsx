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
        <section className='container-front-section'>
            {/* <div className='container-front-section__intro'>
                <h1 key={front.name}>{ front.name }</h1>
                <video></video>
                <p key={front.introduction}>{front.introduction}</p>
            </div> */}

            <div className='container-front-section__fixed'>
                <div className='container-front-section__fixed__cont-btns'>
                    <button className='container-front-section__fixed__cont-btns__btns'>UX | UI</button>
                    <button className='container-front-section__fixed__cont-btns__btns'>Frontend</button>
                </div>
                
                <div className='container-front-section__fixed__drop'>
                    <div className='cont-text'>
                        <p className='' key={front.description}>{ front.description }</p>
                        <p className='' key={front.tools}>{ front.tools }</p>
                    </div>    

                    <div className=''>
                        <img className='' src={front.img}></img>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
export default FrontWorks;