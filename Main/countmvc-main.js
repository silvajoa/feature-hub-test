import React from 'react';
import {FeatureAppLoader} from '@feature-hub/react';


export default (props) => {
    const handleClick = () => {
        props.countManager.plus();
    }

    return (
        <>
            <h2>MAIN</h2>
            <button onClick={handleClick}>CLICK ME TO ADD</button>
            <FeatureAppLoader
                featureAppId={`${props.featureAppId}:other-featureapp`}
                baseUrl={'other'}
                src='feature-app-other.umd.js'
            />
        </>
    )
}
