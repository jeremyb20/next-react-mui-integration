import MapView from '@/sections/_examples/extra/map-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Map',
};

export default function MapPage() {
  return <MapView />;
}
