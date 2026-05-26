import { Metadata } from 'next';

import { InvoiceDetailsView } from '@/sections/invoice/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Invoice Details',
};

type Props = {
  params: {
    id: string;
  };
};

export default function InvoiceDetailsPage({ params }: Props) {
  const { id } = params;

  return <InvoiceDetailsView id={id} />;
}

// // export async function generateStaticParams() {
// //   return _invoices.map((invoice) => ({
// //     id: invoice.id,
// //   }));
// // }
