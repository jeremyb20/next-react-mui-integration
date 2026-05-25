import UploadView from '@/sections/_examples/extra/upload-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Upload',
};

export default function UploadPage() {
  return <UploadView />;
}
