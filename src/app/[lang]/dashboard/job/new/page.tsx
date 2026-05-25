import { JobCreateView } from '@/sections/job/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Create a new job',
};

export default function JobCreatePage() {
  return <JobCreateView />;
}
