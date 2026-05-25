import ChartView from '@/sections/_examples/extra/chart-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Chart',
};

export default function ChartPage() {
  return <ChartView />;
}
