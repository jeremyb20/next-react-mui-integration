import DataGridView from '@/sections/_examples/mui/data-grid-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: DataGrid',
};

export default function DataGridPage() {
  return <DataGridView />;
}
