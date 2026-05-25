// ----------------------------------------------------------------------

import { ProductShopView } from '@/sections/product/view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product: Shop',
};

export default function ShopPage() {
  return <ProductShopView />;
}
