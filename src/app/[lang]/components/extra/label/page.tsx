import LabelView from '@/sections/_examples/extra/label-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Label',
};

export default function LabelPage() {
  return <LabelView />;
}
