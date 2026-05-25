import { ClassicNewPasswordView } from '@/sections/auth-demo/classic';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth Classic: New Password',
};

export default function ClassicNewPasswordPage() {
  return <ClassicNewPasswordView />;
}
