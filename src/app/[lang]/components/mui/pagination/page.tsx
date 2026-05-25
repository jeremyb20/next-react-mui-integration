import PaginationView from '@/sections/_examples/mui/pagination-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: Pagination',
};

export default function PaginationPage() {
  return <PaginationView />;
}
