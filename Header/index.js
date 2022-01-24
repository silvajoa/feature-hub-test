import * as React from 'react';
import Header from './countmvc-header';

const featureAppDefinition = {
    dependencies: {
        // all required Feature Services are declared
        // e.g: {'acme:some-feature-service': '^2.0.0'} - featureService ID as key
        featureServices: {'test:countmvc-count-manager': '^1.0.0'},
        // all required external dependencies are declared
        externals:{
            react: '^17.0.1'
        }
    },

    create: (env) => {
        const countManager = env.featureServices['test:countmvc-count-manager'];

        return {
            render: () => <Header countManager={countManager} />,
        };
    },
}

export default featureAppDefinition;
