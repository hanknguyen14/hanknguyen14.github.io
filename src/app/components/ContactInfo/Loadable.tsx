import { lazyLoad } from 'utils/loadable';

export const ContactInfo = lazyLoad(
  () => import('./index'),
  module => module.ContactInfo,
);
