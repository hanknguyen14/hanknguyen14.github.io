import { lazyLoad } from 'utils/loadable';

export const Resume = lazyLoad(
  () => import('./index'),
  module => module.Resume,
);
