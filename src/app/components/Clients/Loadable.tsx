import { lazyLoad } from 'utils/loadable';

export const Clients = lazyLoad(
  () => import('./index'),
  module => module.Clients,
);
