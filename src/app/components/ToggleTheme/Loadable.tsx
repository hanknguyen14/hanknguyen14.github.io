import { lazyLoad } from 'utils/loadable';

export const ToggleTheme = lazyLoad(
  () => import('./index'),
  module => module.ToggleTheme,
);
