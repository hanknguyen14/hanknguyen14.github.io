/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const SideBar = lazyLoad(
  () => import('./index'),
  module => module.SideBar,
);
