import { lazyLoad } from 'utils/loadable';

export const Skills = lazyLoad(
  () => import('./index'),
  module => module.Skills,
);
