import { lazyLoad } from 'utils/loadable';

export const Services = lazyLoad(
  () => import('./index'),
  module => module.Services,
);
