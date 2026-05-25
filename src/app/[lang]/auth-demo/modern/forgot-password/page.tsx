import { ModernForgotPasswordView } from '@/sections/auth-demo/modern';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth Modern: Forgot Password',
};

export default function ModernForgotPasswordPage() {
  return <ModernForgotPasswordView />;
}
