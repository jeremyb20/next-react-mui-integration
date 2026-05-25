import { AccountView } from '@/sections/account/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Account Settings',
};

export default function AccountPage() {
  return <AccountView />;
}
