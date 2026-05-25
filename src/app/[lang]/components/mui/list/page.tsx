import ListView from '@/sections/_examples/mui/list-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: List',
};

export default function ListPage() {
  return <ListView />;
}
