import TransferListView from '@/sections/_examples/mui/transfer-list-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: Transfer List',
};

export default function TransferListPage() {
  return <TransferListView />;
}
