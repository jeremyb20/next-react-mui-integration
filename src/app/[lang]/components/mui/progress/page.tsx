import ProgressView from '@/sections/_examples/mui/progress-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: Progress',
};

export default function ProgressPage() {
  return <ProgressView />;
}
