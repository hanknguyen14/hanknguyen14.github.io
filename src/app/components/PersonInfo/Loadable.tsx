/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const PersonInfo = lazyLoad(
  () => import('./index'),
  module => module.PersonInfo,
);
