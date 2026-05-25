import { ModernVerifyView } from '@/sections/auth-demo/modern';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth Modern: Verify',
};

export default function ModernVerifyPage() {
  return <ModernVerifyView />;
}
