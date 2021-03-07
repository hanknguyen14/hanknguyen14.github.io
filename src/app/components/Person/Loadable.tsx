/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const Person = lazyLoad(
  () => import('./index'),
  module => module.Person,
);
