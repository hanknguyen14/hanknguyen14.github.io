import { lazyLoad } from 'utils/loadable';

export const Works = lazyLoad(
  () => import('./index'),
  module => module.Works,
);
