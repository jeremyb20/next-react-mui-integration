import { ClassicVerifyView } from '@/sections/auth-demo/classic';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth Classic: Verify',
};

export default function ClassicVerifyPage() {
  return <ClassicVerifyView />;
}
