import React from "react";
import './frontend.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Front from "../front/Front";
import Ux from "../ux/Ux";
import { useParams } from "react-router-dom";

function FrontWorks(){

    //activate buttons
    const [active, setActive]= useState("ux");

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
        <section className='container-info mobile-margin padding-top'>
            <div className='container-info__intro'>
                <h1 className="container-info__intro__title main-titles" key={front.name}>{ front.name }</h1>
                <p className="container-info__intro__p atom-margin-link" key={front.introduction}>{front.introduction}</p>
                <video src={front.video} type="video/mp4" controls autoplay muted>
                    <source src={front.video} type="video/mp4"></source>
                </video>
            </div>
            <div>
                <button onClick={() => setActive("ux")}>UX | UI</button>
                <button onClick={() => setActive("front")}>Frontend</button>
            </div>
            {active === "ux" && <Ux></Ux>}
            {active === "front" && <Front></Front>}
            
            <div className='container-info__imgs'>
                {/* <img className='' src={front.img}></img> */}
            </div>
        </section>
    </>
    )
}
    export default FrontWorks;