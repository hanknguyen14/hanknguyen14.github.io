/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const MainWrapper = lazyLoad(
  () => import('./index'),
  module => module.MainWrapper,
);
