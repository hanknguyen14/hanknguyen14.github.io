import { lazyLoad } from 'utils/loadable';

export const BubbleAnimation = lazyLoad(
  () => import('./index'),
  module => module.BubbleAnimation,
);
