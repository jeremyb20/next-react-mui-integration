import { InvoiceCreateView } from '@/sections/invoice/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Create a new invoice',
};

export default function InvoiceCreatePage() {
  return <InvoiceCreateView />;
}
