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

    //filtered cards//
    
    //printing card works//
    return (
        <>
            <section className='container-cards mobile-margin margin-bottom'>
                <h2 className='main-titles'>selected<br></br>works</h2>
                <div className='container-cards__container-btns'>
                    <button  className='container-cards__container-btns__btns'>UX</button>
                    <button className='container-cards__container-btns__btns'>Frontend</button>
                    <button  className='container-cards__container-btns__btns'>Graphic Design</button>
                </div>
                {cards.map(card=> (<>
                    <div className='container-cards__card'>
                        <Link className='container-cards__card__link link-properties' to={`/${card.category}/${card.id}`}>
                        
                                <div className='cont-text'>
                                    <p className='container-cards__card__title' key={card.name}>{card.name}</p>
                                    <p className='container-cards__card__desc' key={card.description}>{card.description}</p>
                                    <ul className='container-cards__card__tools'>
                                        {card.tools.map(tool => <li key={card.tools}>{tool}</li>)}
                                    </ul>
                                </div>    

                                <div className='cont-img'>
                                    <img className='container-cards__card__container-img' src={card.img}></img>
                                </div>
                            
                        </Link>
                    </div>
                </>))}
            </section>
        </>
    );
}

export default GetWorks;

