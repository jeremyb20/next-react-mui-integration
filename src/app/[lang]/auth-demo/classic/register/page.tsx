import { ClassicRegisterView } from '@/sections/auth-demo/classic';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Auth Classic: Register',
};

export default function ClassicRegisterPage() {
  return <ClassicRegisterView />;
}
