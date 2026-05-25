import { MailView } from '@/sections/mail/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Mail',
};

export default function MailPage() {
  return <MailView />;
}
