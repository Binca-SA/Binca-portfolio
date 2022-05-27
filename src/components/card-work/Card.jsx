import { useEffect, useState } from 'react';
import './card.css';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


function GetWorks(){

    const [cards, setCards] = useState([]);

    //getting json//
    useEffect(() => {
        axios.get('json/works.json')
        .then(response => setCards(response.data));
    }, [])


    //printing card works//
    return (
        <>
            <section className='container-cards mobile-padding'>
                <h2 className='main-titles'>selected<br></br>works</h2>
                <div className='container-cards__container-btns'>
                    <button className='container-cards__container-btns__btns'>UX | UI</button>
                    <button className='container-cards__container-btns__btns'>Frontend</button>
                    <button className='container-cards__container-btns__btns'>Graphic Design</button>
                </div>
                {cards.map(card => (<>
                    <div>
                        <Link to={card.id}>
                            <p key={card.name}>{ card.name }</p>
                            <p key={card.description}>{ card.description }</p>
                            <ul>
                                <li key={card.tools}>{ card.tools }</li>
                            </ul>
                        </Link>
                    </div>
                </>))}
            </section>
        </>
    );
}

export default GetWorks;

