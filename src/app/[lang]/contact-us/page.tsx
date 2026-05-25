import { ContactView } from '@/sections/contact/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Contact us',
};

export default function ContactPage() {
  return <ContactView />;
}
