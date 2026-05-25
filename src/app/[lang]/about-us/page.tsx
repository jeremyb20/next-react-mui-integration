import { AboutView } from '@/sections/about/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'About us',
};

export default function AboutPage() {
  return <AboutView />;
}
