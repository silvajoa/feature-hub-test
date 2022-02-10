import React from 'react';

export default (props) => {
    const handleClick = () => {
        props.countManager.plus();
        props.countManager.notifyListeners();
    }

    return (
        <>
            <h2>MAIN</h2>
            <button onClick={handleClick}>CLICK ME</button>
        </>
    )
}
