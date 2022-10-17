import React, {useState} from 'react';
import WordInput from "./WordInput";
import WordDisplay from "./WordDisplay";

let index = 0;

function WordContainer() {

    const [words, setWords] = useState([]);

    const inputStr = (str) => {
        setWords([...words, {index: index++, word: str}])
    }

    console.log(words)

    return (
        <div>
            <h1>WordEx</h1>
            <WordInput inputStr={inputStr}></WordInput>
            <WordDisplay words={words} setWords={setWords}></WordDisplay>
        </div>
    );
}

export default WordContainer;