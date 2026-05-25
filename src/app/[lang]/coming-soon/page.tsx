import ComingSoonView from '@/sections/coming-soon/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Coming Soon',
};

export default function ComingSoonPage() {
  return <ComingSoonView />;
}
