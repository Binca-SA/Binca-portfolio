// import { useEffect, useState } from 'react';
// import './card.css';
// import axios from 'axios';
// import React from 'react';


// function GetWorks(){

//     const [cards, setCards] = useState([]);

//     useEffect(() => {
//         axios.get('json/elements.json')
//         .then(response => setCards(response.data));
//     }, [])

//     return (
//         <>
//             <div className='container-card'>
//                 {cards.map(card => (
//                     Object.keys
//                     <h1 key={card.name}>{ card.name }</h1>
//                     <h1>Tools</h1>
//                     {card.tools.map(tool => <li>{tool.Goals}</li>)
//                     {card.projects.map(topic => <h1>{topic.Goals}</h1>)
//                 }
//             ))}
//             </div>
//         </>
//     );
// }





// export default GetWorks;