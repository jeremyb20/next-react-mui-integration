import { OverviewEcommerceView } from '@/sections/overview/e-commerce/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: E-Commerce',
};

export default function OverviewEcommercePage() {
  return <OverviewEcommerceView />;
}
