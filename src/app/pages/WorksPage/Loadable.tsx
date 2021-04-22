import { lazyLoad } from 'utils/loadable';

export const WorksPage = lazyLoad(
  () => import('./index'),
  module => module.WorksPage,
);
