import PermissionDeniedView from '@/sections/permission/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Permission Denied',
};

export default function PermissionDeniedPage() {
  return <PermissionDeniedView />;
}
