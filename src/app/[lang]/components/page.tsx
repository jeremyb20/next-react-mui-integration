import ComponentsView from '@/sections/_examples/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components',
};

export default function ComponentsPage() {
  return <ComponentsView />;
}
