/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const RightLayout = lazyLoad(
  () => import('./index'),
  module => module.RightLayout,
);
