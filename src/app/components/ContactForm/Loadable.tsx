import { lazyLoad } from 'utils/loadable';

export const ContactForm = lazyLoad(
  () => import('./index'),
  module => module.ContactForm,
);
