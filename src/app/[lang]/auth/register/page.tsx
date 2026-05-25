import { JwtRegisterView } from '@/sections/auth/jwt';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Jwt: Register',
};

export default function RegisterPage() {
  return <JwtRegisterView />;
}
