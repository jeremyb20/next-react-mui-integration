import { UserListView } from '@/sections/user/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: User List',
};

export default function UserListPage() {
  return <UserListView />;
}
