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
            <section className='container-grid'>
                <h2 className='main-titles'>a collection<br></br>of things<br></br>I do</h2>
                {archive.map(photo => (<>
                    <div className='container-grid__cont-photo'>
                        <img key={photo.img} src={photo.img}></img>
                        <p key={photo.name}>{ photo.name }</p>
                        <p key={photo.description}>{ photo.description }</p>
                        <p key={photo.tools}>{ photo.tools }</p>
                    </div>
                </>))}
            </section>
        </>
    );
}

export default GetPhotos;
