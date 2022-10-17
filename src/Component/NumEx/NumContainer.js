import React, {useState} from 'react';
import NumDisplay from "./NumDisplay";
import NumButton from "./NumButton";

function NumContainer() {

    const [num, setNum] = useState(3);

    const changeNum = (amount) => {
        setNum(num + amount)
    };

    return (
        <div>
            <NumDisplay num={num}></NumDisplay>
            <NumButton changeNum={changeNum}></NumButton>
        </div>
    );
}

export default NumContainer;