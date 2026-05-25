import BreadcrumbsView from '@/sections/_examples/mui/breadcrumbs-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: Breadcrumbs',
};

export default function BreadcrumbsPage() {
  return <BreadcrumbsView />;
}
