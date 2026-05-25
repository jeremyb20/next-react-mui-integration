import { FileManagerView } from '@/sections/file-manager/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: File Manager',
};

export default function FileManagerPage() {
  return <FileManagerView />;
}
