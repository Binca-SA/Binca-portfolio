import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import './archive.css';

function GetPhotos(){

    const [archive, setArchive] = useState([]);

    //getting json//
    useEffect(() => {
        axios.get('json/archive.json')
        .then(response => setArchive(response.data));
    }, [])


    //printing images//
    return (
        <>
        <section className=' container-archive mobile-margin'>
            <h1 className='main-titles container-archive__title-archive'>a collection<br></br>of things<br></br>I do<span className='subtitle-style__arch'>ILLUSTRATIONS<br></br>
                COMPOSITIONS<br></br>PRINTEDS<br></br>COLOR PALETTE<br></br>and more...</span></h1>
            <div className='container-grid'>
                {archive.map(photo => (<>
                    <div className='container-grid__cont-photo'>
                        <img className='container-grid__cont-photo__img' key={photo.img} src={photo.img}></img>
                        {/* <p key={photo.name}>{ photo.name }</p>
                        <p key={photo.description}>{ photo.description }</p>
                        <p key={photo.tools}>{ photo.tools }</p> */}
                    </div>
                </>))}
            </div>
        </section>
        </>
    );
}

export default GetPhotos;
