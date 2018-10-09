import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'app-header',
  outputTargets: [
    { type: 'dist' }
  ],
  globalStyle: 'src/global/app.css'
};
