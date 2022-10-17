import React, {useState} from 'react';

function WordInput({inputStr}) {

    const [str, setStr] = useState('');

    const changeHandler = (e) => {
        setStr(e.target.value);
    }

    const clickHandler = () => {
        inputStr(str);
        setStr('');
    }

    return (
        <div>
            <input type="text" value={str} onChange={changeHandler}/>
            &nbsp; &nbsp;
            <button onClick={clickHandler}>SAVE</button>
        </div>
    );
}

export default WordInput;