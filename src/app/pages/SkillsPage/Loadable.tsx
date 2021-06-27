/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const SkillsPage = lazyLoad(
  () => import('./index'),
  module => module.SkillsPage,
);
