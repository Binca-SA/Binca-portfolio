import React, { useState } from 'react';
import './bgColour.css';


export default function BgColour() { 
    const [setBackground] = useState("#DCD6EB");
    const setStyle = (background) => {
        setBackground(background)
    };
    
    return <> <div className='container-change-colour'>
        <button onClick={() => setStyle("#DCD6EB")} className='container-change-colour__color'></button>
        <button onClick={() => setStyle("#EFD89C")} className='container-change-colour__color'></button>
        <button onClick={() => setStyle("#C3DCC1")} className='container-change-colour__color'></button>
    </div>
    </>
}