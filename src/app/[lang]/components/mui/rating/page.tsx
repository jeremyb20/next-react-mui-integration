import RatingView from '@/sections/_examples/mui/rating-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: Rating',
};

export default function RatingPage() {
  return <RatingView />;
}
