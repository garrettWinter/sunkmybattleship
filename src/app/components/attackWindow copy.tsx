"use client"

import { useState } from 'react';
export default function AttackWindow (){
    //Styling Here
    const styling = {
        border: "solid black 2px",
        display: "flex",
        FlexDirection: "column",
        alignItems: "center",
    };
    let buttonStyle = {
        backgroundColor: "red",
        width: "20%",
        
    }

    ///Logic Here
   function attackActionButton (){
    // const [value, setValue] = useState('default value');
    // console.log(`${value} is value`);
    // setValue = 
    console.log("Attack Button Clicked");
    window.alert("You attacked")

    }

     return (
        <div style={styling}>
            <span>It is your turn, where do you want to attack?</span>
            <textarea></textarea>
            <button style={buttonStyle} onClick={attackActionButton}>ATTACK!</button>
        </div>
     )
}