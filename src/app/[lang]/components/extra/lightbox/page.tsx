import LightboxView from '@/sections/_examples/extra/lightbox-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Lightbox',
};

export default function LightboxPage() {
  return <LightboxView />;
}
