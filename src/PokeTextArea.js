import React, {Component} from 'react';
//import {val} from './PokeSelect.js';
import {css}  from '@emotion/css';
let id = 25;
console.log(id);
let pokeDesc = ["pokemon", "generation", "evolution-chain"];
let poke=[""," "];
let Poketext
export default class Pokemon_TextArea extends Component{
  
  constructor(props){
    super(props);
     Poketext = props;

    this.state = {
      isLoaded: false,
      pokemon_name: [],
      pokemon_gen:[],
      pokemon_evchain:[]
      
    };
  }

  componentDidMount(vel){
      vel = id;
    for(let i = 0; i<pokeDesc.length;i++){
    if(pokeDesc[i] == "pokemon"){
        fetch('https://pokeapi.co/api/v2/'+ pokeDesc[i] +'?limit=' + vel)
            .then(response => response.json())
            .then(
                (result) => {
            this.setState({
                isLoaded: true, 
                pokemon_name: result.results,
                
            } );
            },
    
    (error)=>{
        this.setState({
            isLoaded: true,
            error
        });
    }
    )
}
    if(pokeDesc[i] == "generation"){
        fetch('https://pokeapi.co/api/v2/'+ pokeDesc[i] +'?limit=' + id)
            .then(response => response.json())
            .then(
                (result) => {
            this.setState({
                isLoaded: true, 
                pokemon_gen: result.results,
                
            } );
            //this.state.pokemons.map(pokemon =>(key = pokemon.results))
            
            
            
            },

    (error)=>{
        this.setState({
            isLoaded: true,
            error
        });
    }
    )
    }
    
    if(pokeDesc[i] == "evolution-chain"){
        fetch('https://pokeapi.co/api/v2/'+ pokeDesc[i] +'?limit=' + id)
            .then(response => response.json())
            .then(
                (result) => {
            this.setState({
                isLoaded: true, 
                pokemon_evchain: result.results,
                
            } );
            //this.state.pokemons.map(pokemon =>(key = pokemon.results))
            
            
            
            },

    (error)=>{
        this.setState({
            isLoaded: true,
            error
        });
    }
    )
    }
}
    

}
  
  render(){
    const {error,isLoaded,pokemon_name,pokemon_gen,pokemon_evchain}=this.state;
    if(error){
        return <p>Error {error.message}</p>
    }else if(!isLoaded){
        return <p>Loading...</p>
    }else{
            return(
            <div >
                    
             {/* Description label*/}
             <label
             style={{
                position: "absolute",
                opacity: "1",
                margin:"0",
                width: "300px",
                border: "solid black",
                left:"60%",
                top:"25%",
                height:"6%",
                fontFamily:"    ",
                fontSize:"32px",
                background:"#f0dc82"
             }}
             >Description</label>
             {/* Name of Pokemon */}
             {pokemon_name.map(pokemon=>(
                 <form key={pokemon.results}>
                 <label 
                 style={{
                    position: "absolute",
                    opacity: "1",
                    margin:"0",
                    width: "300px",
                    display: "flex",
                    border: "solid black",
                    left:"60%",
                    top:"34%",
                    height:"6%",
                    fontFamily:" Verdana",
                    fontSize:"32px",
                    background:"#f0dc82"
                 }}>
                     
                 {pokemon.name}
                 </label>
                 </form>
                 
             ))}
             {/*Pokemon`s gen */}
             {pokemon_gen.map(pokemon=>(
                 <form key={pokemon.results}>
                 <label 
                 style={{
                    position: "absolute",
                    opacity: "1",
                    margin:"0",
                    width: "300px",
                    display: "flex",
                    border: "solid black",
                    left:"60%",
                    top:"44%",
                    height:"6%",
                    fontFamily:"Verdana",
                    fontSize:"32px",
                    background:"#f0dc82"
                 }}>
                    {pokemon.name}
                 </label>
                 </form>
             ))}
             {/* Ev chain */}
             {pokemon_evchain.map(pokemon=>(
                 <form key={pokemon.results}>
                 <label 
                 style={{
                    position: "absolute",
                    opacity: "1",
                    margin:"0",
                    width: "300px",
                    display: "flex",
                    border: "solid black",
                    left:"60%",
                    top:"54%",
                    height:"6%",
                    fontFamily:" Verdana",
                    fontSize:"32px",
                    background:"#f0dc82"
                 }}>
                     
                 {pokemon.name}
                 </label>
                 </form>
                 
             ))}

             </div>
            );
        }   
    }
}


{/* <div>
         <form>
             <label
             style={{
                position: "absolute",
                opacity: "1",
                margin:"0",
                width: "15%",
                border: "solid black",
                left:"60%",
                top:"25%",
                height:"6%",
                fontFamily:"Verdana",
                fontSize:"32px",
                background:"#f0dc82"
             }}
             >Description</label>
             <textarea
             placeholder
             disabled
             style={
                
                 { 
               position: "absolute",
               border: "solid black",
               margin:"0",
               width: "37%",
               left:"60%",
               top:"32%",
               height:"53%",
               background: "#ffdf00",
               fontSize:"24px",
               fontFamily: "Verdana",
               
               
               
               
                //  objectFit: "cover",
                //  transform: "translate(-50%, -50%)",
                //  zIndex: "-1",
                //  overflowY:"hidden",
                //  paddingBottom: "0", 
        



            }
            
    }
              >
             
         
        
             
            </textarea>
         </form>
         

     </div> */}
/* class Read_Text extends Component{
    constructor(props){
        super(props);
        this.state={
            fileName: "description",
            fileContent: ""
        };
    }
    handleFileChange = e =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload=()=>{
            
                return;
            
        }
    }
} */
