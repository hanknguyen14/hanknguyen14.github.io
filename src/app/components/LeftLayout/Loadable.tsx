/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const LeftLayout = lazyLoad(
  () => import('./index'),
  module => module.LeftLayout,
);
