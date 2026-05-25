import { FirebaseVerifyView } from '@/sections/auth/firebase';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Firebase: Verify',
};

export default function VerifyPage() {
  return <FirebaseVerifyView />;
}
