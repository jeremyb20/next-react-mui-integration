import { CheckoutView } from '@/sections/checkout/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Checkout',
};

export default function CheckoutPage() {
  return <CheckoutView />;
}
