import { Auth0LoginView } from '@/sections/auth/auth0';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth0: Login',
};

export default function LoginPage() {
  return <Auth0LoginView />;
}
