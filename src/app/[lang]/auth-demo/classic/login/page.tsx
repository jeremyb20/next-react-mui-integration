import { ClassicLoginView } from '@/sections/auth-demo/classic';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth Classic: Login',
};

export default function ClassicLoginPage() {
  return <ClassicLoginView />;
}
