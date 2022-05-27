import React from 'react';
import './graphic-project.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function GraphicProject(){

    const [graphics, setGraphic] = useState([]);

    //getting json//
    useEffect(() => {
        axios.get('json/works.json')
        .then(response => setGraphic(response.data.filter(element=> element.category == 'graphic')));
    }, [])


    //printing card works//
    return (
        <>
            <section className='container-graphic'>
                {graphics.map(graphic => (<>
                    <div>
                        <p key={graphic.name}>{ graphic.name }</p>
                        <p key={graphic.description}>{ graphic.description }</p>
                        <ul>
                            <li key={graphic.tools}>{ graphic.tools }</li>
                        </ul>
                    </div>
                </>))}
            </section>
        </>
    );
}

export default  GraphicProject;