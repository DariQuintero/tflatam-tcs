import React from 'react'
import './Start.css'
export default function Start() {
  return (
    <div>
        <footer className='StartFooter'>
        <img className="startReturn" id='startReturn' src={require('../images/akar-icons_arrow-back.png')} alt='return'></img>
            <img className="startBar" id='startBar' src={require('../images/Rectangle_1.png')} alt='bar'></img>
        
        <p>Tiempo estimado de llegada</p>


        </footer>


    </div>
  )
}
