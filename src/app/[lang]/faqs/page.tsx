import { FaqsView } from '@/sections/faqs/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Faqs',
};

export default function FaqsPage() {
  return <FaqsView />;
}
