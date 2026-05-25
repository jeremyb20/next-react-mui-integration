import { ModernLoginView } from '@/sections/auth-demo/modern';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth Modern: Login',
};

export default function ModernLoginPage() {
  return <ModernLoginView />;
}
