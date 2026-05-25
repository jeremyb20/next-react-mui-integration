import BlankView from '@/sections/blank/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Blank',
};

export default function BlankPage() {
  return <BlankView />;
}
