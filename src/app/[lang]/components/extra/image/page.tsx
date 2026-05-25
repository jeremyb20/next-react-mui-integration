import ImageView from '@/sections/_examples/extra/image-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Image',
};

export default function ImagePage() {
  return <ImageView />;
}
