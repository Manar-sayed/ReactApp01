import React from 'react'
import './Card.css';
//this component just to be a container(card) to contain other tages or components
function Card(props) {
    // const classes= 'card'+ props.className;
    const classes = 'card '+ props.className;

  return <div className={classes}>
        {props.children}
   </div>
  
}

export default Card