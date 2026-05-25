import { ColorsView } from '@/sections/_examples/foundation';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Foundations: Colors',
};

export default function ColorsPage() {
  return <ColorsView />;
}
