import { OverviewBankingView } from '@/sections/overview/banking/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Banking',
};

export default function OverviewBankingPage() {
  return <OverviewBankingView />;
}
