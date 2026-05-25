// ----------------------------------------------------------------------

import { AccountView } from '@/sections/account/view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard: User Profile',
};

export default function UserProfilePage() {
  return <AccountView />;
}
