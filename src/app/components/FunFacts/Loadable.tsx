import { lazyLoad } from 'utils/loadable';

export const FunFacts = lazyLoad(
  () => import('./index'),
  module => module.FunFacts,
);
