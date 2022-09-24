import { useEffect, useState } from "react";
import styled from "styled-components";
import words from "./words";
import Letters from "./Letters";
import hang0 from "../assets/imgs/hang0.png";
import hang1 from "../assets/imgs/hang1.png";
import hang2 from "../assets/imgs/hang2.png";
import hang3 from "../assets/imgs/hang3.png";
import hang4 from "../assets/imgs/hang4.png";
import hang5 from "../assets/imgs/hang5.png";
import hang6 from "../assets/imgs/hang6.png";

export default function Game() {
    const [life, setLife] = useState(6);
    const [letters, setLetters] = useState([]);
    const [secretWord, setSecretWord] = useState([]);

    const arrayWords = words;

    arrayWords.sort(comparator)
    function comparator() {
        return Math.random() - 0.5;
    }

    const word = arrayWords.slice(0, 1).toString();
    const arrayWord = word.split("");

    if(life === 0) {
        setTimeout(() => {
            alert("VOCÊ PERDEU!");
            window.location.reload();
        }, 200);
    }
    
    
    

    useEffect( () => {
        setSecretWord(arrayWord);
        const quantityOfLetters = arrayWord.length;
        setLetters(Array(quantityOfLetters).fill("_ "));
        console.log(word)

     

        
    }, []);
    
    

    return (
        <Content>
            <HangMan>
                <img src={life === 6 ? (hang0) : life === 5 ? (hang1) : life === 4 ? (hang2) : life === 3 ? (hang3) : life === 2 ? (hang4) : life === 1 ? (hang5) : (hang6)} alt="hang" />
            </HangMan>

            <Button onClick={(() => window.location.reload())}>
                <p>Escolher palavra</p>
            </Button>

            <Word>
                <p>{letters}</p>
            </Word>

            <BoxLetters>
                <Letters secretWord={secretWord} life={life} setLife={setLife} letters={letters} setLetters={setLetters}/>
            </BoxLetters>

        </Content>
    )
}

const Content = styled.div`
    max-width: 614px;
    min-height: 600px;
    margin: 0 auto;
    margin-top: 40px;
    position: relative;
`

const HangMan = styled.div`

    img {
        max-width: 300px;
        
        transition: all 1s linear;
        opacity: 1;
    }
`

const BoxLetters = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 5px;
    margin-top: 20px;
`

const Button = styled.button`
    width: 130px;
    height: 40px;
    background-color: #27AE60;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: bold;
    position: absolute;
    right: 60px;
    top: 25px;
    cursor: pointer;
    @media (max-width: 485px) {
        right: 10px;
        top: 550px;
    }
`

const Word = styled.div`
    position: absolute;
    right: 60px;
    bottom: 250px;
    font-size: 2rem;

`