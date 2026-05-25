import { ProductCreateView } from '@/sections/product/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Create a new product',
};

export default function ProductCreatePage() {
  return <ProductCreateView />;
}
