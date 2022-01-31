import './Poke_Canvass.css';
import React from 'react';
import pokemon_canvas from './images/pokemon_canva.png';
import {css}  from '@emotion/css';



function Pokemon_Canva() {
    return (
     <div id="Poke_image" className={css`
    
  
  margin: 0;
  position: absolute;
  display: flex;
  width: 100%;
  left: 0%;
  top: 25%;
  height: 20%;
  z-index: -1;
  font-size: calc(10px + 2vmin);
  color: black;
  
  `}>
    {/* <div  className="Poke_name_dv">
      <h1 id = "Poke_Name" >{pokename}</h1>
    </div> */}

          <img src={pokemon_canvas} alt="" className='Poke_backk' />


        </div>
        
    
)
}


export default Pokemon_Canva;