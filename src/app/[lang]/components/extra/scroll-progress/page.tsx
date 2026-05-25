import ScrollProgressView from '@/sections/_examples/extra/scroll-progress-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Scroll Progress',
};

export default function ScrollProgressPage() {
  return <ScrollProgressView />;
}
