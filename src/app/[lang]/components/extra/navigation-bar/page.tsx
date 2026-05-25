import NavigationBarView from '@/sections/_examples/extra/navigation-bar-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Navigation Bar',
};

export default function NavigationBarPage() {
  return <NavigationBarView />;
}
