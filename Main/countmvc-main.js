import React from 'react';

export default (props) => {
    const handleClick = () => {
        console.log('click');
        props.countManager.plus();
        console.log('handleClick:', props.countManager);
        props.countManager.notifyListeners();
    }

    return (
        <>
            <h2>MAIN</h2>
            <button onClick={handleClick}>CLICK ME</button>
        </>
    )
}
