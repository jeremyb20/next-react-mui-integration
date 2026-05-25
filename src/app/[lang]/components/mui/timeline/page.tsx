import TimelineView from '@/sections/_examples/mui/timeline-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: Timeline',
};

export default function TimelinePage() {
  return <TimelineView />;
}
