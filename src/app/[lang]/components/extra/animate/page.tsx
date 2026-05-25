import AnimateView from '@/sections/_examples/extra/animate-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Animate',
};

export default function AnimatePage() {
  return <AnimateView />;
}
