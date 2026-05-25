import { JwtLoginView } from '@/sections/auth/jwt';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Login to your account',
};

export default function LoginPage() {
  return <JwtLoginView />;
}
