import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component.jsx';


export const CardList=props=>(
 <div className='card-list'>
	{ 
		props.monsters.map(element=>(
          <Card key={element.id} monster={element}/>
          ))
    }
 </div>

);