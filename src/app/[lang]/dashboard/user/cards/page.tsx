import { UserCardsView } from '@/sections/user/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: User Cards',
};

export default function UserCardsPage() {
  return <UserCardsView />;
}
