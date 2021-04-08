import { lazyLoad } from 'utils/loadable';

export const SectionTitle = lazyLoad(
  () => import('./index'),
  module => module.SectionTitle,
);
