import { PaymentView } from '@/sections/payment/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Payment',
};

export default function PaymentPage() {
  return <PaymentView />;
}
