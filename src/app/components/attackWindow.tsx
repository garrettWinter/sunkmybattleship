"use client"

import { useState, CSSProperties } from 'react';

export default function AttackWindow() {
    const [inputValue, setInputValue] = useState('');

    //Styling Here
    const stylings: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    let buttonStyles: CSSProperties = {
        backgroundColor: "red",
        width: "20%",
    };

    function attackActionButton() {
        console.log("Attack Button Clicked");
        window.alert(`You Attacked ${inputValue}`)
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div style={stylings}>
            <span>It is your turn, where do you want to attack?</span>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button style={buttonStyles} onClick={attackActionButton}>ATTACK!</button>
        </div>

    );
}