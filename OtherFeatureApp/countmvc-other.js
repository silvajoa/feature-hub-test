import React from 'react';

export default (props) => {
    const handleClick = () => {
        props.countManager.minus();
    }

    return (
        <>
            <h2>Other Feature App Inside Main</h2>
            <button onClick={handleClick}>CLICK ME TO DECREASE</button>
        </>
    )
}
