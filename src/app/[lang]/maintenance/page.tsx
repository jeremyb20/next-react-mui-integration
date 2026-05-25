import MaintenanceView from '@/sections/maintenance/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Maintenance',
};

export default function MaintenancePage() {
  return <MaintenanceView />;
}
