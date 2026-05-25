import { FirebaseForgotPasswordView } from '@/sections/auth/firebase';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Firebase: Forgot Password',
};

export default function ForgotPasswordPage() {
  return <FirebaseForgotPasswordView />;
}
