import React from 'react';

function NumButton({changeNum}) {
    return (
        <div>
            <button onClick={() => {changeNum(1)}}> + </button>
            &nbsp; &nbsp;
            <button onClick={() => {changeNum(-1)}}> - </button>
        </div>
    );
}

export default NumButton;