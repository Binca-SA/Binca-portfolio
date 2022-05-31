import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import './archive.css';
// import Modal from '../../components/modal/Modal';


function GetPhotos(){
    //for modal//
    const [active, SetActive] = useState(true);

    const toggle = () => {
        SetActive(!active);
    }

    //calling JSON//
    const [archive, setArchive] = useState([]);

    //getting json//
    useEffect(() => {
        axios.get('json/archive.json')
        .then(response => setArchive(response.data));
    }, [])


    //printing images//
    return (
        <>
        <section className='bg-white container-archive mobile-margin padding-top'>
            <h1 className='main-titles container-archive__title-archive'>a collection<br></br>of things<br></br>I do<span className='subtitle-style__arch'>ILLUSTRATIONS<br></br>
                COMPOSITIONS<br></br>PRINTEDS<br></br>COLOR PALETTE<br></br>and more...</span></h1>
            <div className='container-grid'>
                {archive.map(photo => (<>
                    <div className='container-grid__cont-photo'>
                        <button className='container-grid__cont-photo__btn' onClick={toggle}>
                            <img className='container-grid__cont-photo__img' key={photo.img} src={photo.img}></img>
                        </button>
                        {/* <Modal active={active} toggle={toggle}>
                            <img className='' key={photo.img} src={photo.img}></img>
                            <p key={photo.name}>{ photo.name }</p>
                            <p key={photo.description}>{ photo.description }</p>
                            <p key={photo.tools}>{ photo.tools }</p>
                        </Modal> */}
                        
                    </div>
                </>))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
        
        </>
    );
}

export default GetPhotos;
