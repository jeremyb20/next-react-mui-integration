import { TourListView } from '@/sections/tour/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Tour List',
};

export default function TourListPage() {
  return <TourListView />;
}
