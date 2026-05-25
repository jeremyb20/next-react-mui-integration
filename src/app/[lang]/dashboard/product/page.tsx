// import { ProductListView } from '@/sections/product/view';

// // ----------------------------------------------------------------------

// export const metadata = {
//   title: 'Dashboard: Product List',
// };

// export default function ProductListPage() {
//   return <ProductListView />;
// }

import { ProductShopView } from '@/sections/product/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Product List',
};

export default function ProductListPage() {
  return <ProductShopView />;
}
