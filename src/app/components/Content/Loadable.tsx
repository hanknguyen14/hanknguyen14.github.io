/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const Content = lazyLoad(
  () => import('./index'),
  module => module.Content,
);
