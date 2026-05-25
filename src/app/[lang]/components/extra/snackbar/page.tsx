import SnackbarView from '@/sections/_examples/extra/snackbar-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Snackbar',
};

export default function SnackbarPage() {
  return <SnackbarView />;
}
