import { TourCreateView } from '@/sections/tour/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Create a new tour',
};

export default function TourCreatePage() {
  return <TourCreateView />;
}
