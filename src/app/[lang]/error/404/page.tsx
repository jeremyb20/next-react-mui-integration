import { NotFoundView } from '@/sections/error';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: '404 Page Not Found!',
};

export default function NotFoundPage() {
  return <NotFoundView />;
}
