import { ModernRegisterView } from '@/sections/auth-demo/modern';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth Modern: Register',
};

export default function ModernRegisterPage() {
  return <ModernRegisterView />;
}
