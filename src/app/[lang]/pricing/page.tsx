import PricingView from '@/sections/pricing/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Pricing',
};

export default function PricingPage() {
  return <PricingView />;
}
