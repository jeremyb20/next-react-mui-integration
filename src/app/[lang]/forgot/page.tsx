// ----------------------------------------------------------------------

import { ModernForgotPasswordView } from '@/sections/auth-demo/modern';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

export default function Page() {
  return <ModernForgotPasswordView />;
}
