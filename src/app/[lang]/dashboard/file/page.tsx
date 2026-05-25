import { OverviewFileView } from '@/sections/overview/file/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: File',
};

export default function OverviewFilePage() {
  return (
    <>
      <OverviewFileView />;
    </>
  );
}
