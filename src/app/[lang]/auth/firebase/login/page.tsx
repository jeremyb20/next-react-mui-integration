import { FirebaseLoginView } from '@/sections/auth/firebase';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Firebase: Login',
};

export default function LoginPage() {
  return <FirebaseLoginView />;
}
