import ScrollView from '@/sections/_examples/extra/scroll-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Scroll',
};

export default function ScrollPage() {
  return <ScrollView />;
}
