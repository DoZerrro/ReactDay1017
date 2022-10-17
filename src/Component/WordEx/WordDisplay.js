import React from 'react';

function WordDisplay({words, setWords}) {

    const wordList = words.map(word => {

        const deleteHandler = (key) => {
            setWords(words.filter((word) => word.index !== key))
        }

        return (
            <li key={word.index}>
                {word.word}
                <button onClick={() => {deleteHandler(word.index)}}>DEL</button>
            </li>
        );
    })

    return (
        <>
            {wordList}
        </>
    );
}

export default WordDisplay;