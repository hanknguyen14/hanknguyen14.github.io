import { lazyLoad } from 'utils/loadable';

export const WorksModal = lazyLoad(
  () => import('./index'),
  module => module.WorksModal,
);
