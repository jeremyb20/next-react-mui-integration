import { UserCreateView } from '@/sections/user/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Create a new user',
};

export default function UserCreatePage() {
  return <UserCreateView />;
}
