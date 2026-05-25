import BadgeView from '@/sections/_examples/mui/badge-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: Badge',
};

export default function BadgePage() {
  return <BadgeView />;
}
