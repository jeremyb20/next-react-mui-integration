import { ModernNewPasswordView } from '@/sections/auth-demo/modern';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth Modern: New Password',
};

export default function ModernNewPasswordPage() {
  return <ModernNewPasswordView />;
}
