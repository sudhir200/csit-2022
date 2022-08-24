import React from 'react';

function Card(props) {
    return (
        <div style={{padding:2,border:"1px solid #000"}}>
            <span>{props.cardTitle}</span>
            <img style={props.imageStyle} src={props.image}/>
            <button onClick={()=>props.onButtonClick()}>
                Click me
            </button>
            <button onClick={()=>props.onSecondButtonClick('ram')}>
                Click me second
            </button>
        </div>

    );
}

export default Card;