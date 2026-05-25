import { OverviewAnalyticsView } from '@/sections/overview/analytics/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Analytics',
};

export default function OverviewAnalyticsPage() {
  return <OverviewAnalyticsView />;
}
