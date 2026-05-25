import { InvoiceListView } from '@/sections/invoice/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Invoice List',
};

export default function InvoiceListPage() {
  return <InvoiceListView />;
}
