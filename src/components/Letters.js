import { useState } from "react";
import styled from "styled-components";

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Letter({value, secretWord, life, setLife, letters, setLetters}) {
    const [isDisabled, setIsDisabled] = useState(false);
    
    function verifyLetter() {
        console.log(secretWord.indexOf(value));
        const index = secretWord.indexOf(value);
        setIsDisabled(true);
        
        if(index === -1) {
            setLife(life - 1);

        } else {
            let holdLetter = letters;
            holdLetter[index] = value;
            setLetters([...holdLetter]);
            isWinner()
        }

        function isWinner() {
            if(!letters.includes("_ ")) {
                setTimeout(() => {
                    alert("VOCÊ GANHOU!");
                    window.location.reload();
                }, 200);
                
            }
        }
    }

    return (
        <BoxLetter disabled={isDisabled} onClick={verifyLetter}>
            <p>{value}</p>
        </BoxLetter>
    )
}

export default function Letters({secretWord, life, setLife, letters, setLetters}) {

    return (
        <>
        {alphabet.map((value, index) => (
            <Letter key={index} value={value} secretWord={secretWord} life={life} setLife={setLife} letters={letters} setLetters={setLetters}/>
        ))}
        </>
    )
}

const BoxLetter = styled.button`
    width: 30px;
    height: 30px;
    background-color: #eeeeee;
    border: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 5px;
    cursor: pointer;
`