import { OverviewAppView } from '@/sections/overview/app/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Welcome',
};

export default function OverviewAppPage() {
  return <OverviewAppView />;
}
