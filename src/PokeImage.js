import './App.css';
import React from 'react';
import pikachu_img from './images/pikachu.png';

import {css}  from '@emotion/css';
import Pokemon_Canva from './PokeCanva';



function PokeImg() {
    return (
     <div id="Poke_image" className={css`
    
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-size: calc(10px + 2vmin);
  color: black;
  overflow-y: hidden;
  `}>
    

          <img src={pikachu_img} onClick={'Click'} alt="" className="Poke_img_class" />
          {/* <img src={pikachu_img} alt="" className="Pokeback_img_class" /> */}
         


        </div>
        
    
)
}


export default PokeImg;
