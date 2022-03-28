import {createFeatureHub} from '@feature-hub/core';
import {defineExternals, loadAmdModule} from '@feature-hub/module-loader-amd';
import {FeatureAppLoader, FeatureHubContextProvider} from '@feature-hub/react';
import * as FeatureHubReact from '@feature-hub/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {countManagerDefinition} from "./count-manager";

const {featureAppManager} = createFeatureHub('test:countmvc-integrator', {
    featureServiceDefinitions: [countManagerDefinition],
    moduleLoader: loadAmdModule,
});

defineExternals({
    react: React,
    '@feature-hub/react': FeatureHubReact
});

ReactDOM.render(
  <FeatureHubContextProvider value={{featureAppManager}}>
    <section className="countapp">
        <FeatureAppLoader
        featureAppId="countmvc-header"
        baseUrl="header"
        src="feature-app-header.umd.js"
        css={[{href: 'index.css'}]}
        />
        <FeatureAppLoader
            featureAppId="countmvc-main"
            baseUrl="main"
            src="feature-app-main.umd.js"
        />
    </section>
  </FeatureHubContextProvider>,
  document.querySelector('main')
);
