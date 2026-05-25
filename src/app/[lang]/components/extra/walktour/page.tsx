import WalktourView from '@/sections/_examples/extra/walktour-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Walktour',
};

export default function WalktourPage() {
  return <WalktourView />;
}
