import { lazyLoad } from 'utils/loadable';

export const ContactPage = lazyLoad(
  () => import('./index'),
  module => module.ContactPage,
);
