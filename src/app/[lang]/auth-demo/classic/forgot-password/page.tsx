import { ClassicForgotPasswordView } from '@/sections/auth-demo/classic';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth Classic: Forgot Password',
};

export default function ClassicForgotPasswordPage() {
  return <ClassicForgotPasswordView />;
}
