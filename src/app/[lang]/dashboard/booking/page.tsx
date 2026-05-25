import { OverviewBankingView } from '@/sections/overview/booking/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Booking',
};

export default function OverviewBookingPage() {
  return <OverviewBankingView />;
}
