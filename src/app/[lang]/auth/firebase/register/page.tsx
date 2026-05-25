import { FirebaseRegisterView } from '@/sections/auth/firebase';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Firebase: Register',
};

export default function RegisterPage() {
  return <FirebaseRegisterView />;
}
