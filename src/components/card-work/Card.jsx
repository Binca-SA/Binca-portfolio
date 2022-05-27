import { useEffect, useState } from 'react';
import './card.css';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


function GetWorks(){

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('json/works.json')
        .then(response => setCards(response.data));
    }, [])

    return (
        <>
            <section className='container-cards'>
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