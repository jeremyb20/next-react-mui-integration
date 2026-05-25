import { JobListView } from '@/sections/job/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Job List',
};

export default function JobListPage() {
  return <JobListView />;
}
