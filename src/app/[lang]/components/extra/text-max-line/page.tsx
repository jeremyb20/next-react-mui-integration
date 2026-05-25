import TextMaxLineView from '@/sections/_examples/extra/text-max-line-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Text Max Line',
};

export default function TextMaxLinePage() {
  return <TextMaxLineView />;
}
