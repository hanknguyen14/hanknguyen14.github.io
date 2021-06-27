/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const MenuList = lazyLoad(
  () => import('./index'),
  module => module.MenuList,
);
