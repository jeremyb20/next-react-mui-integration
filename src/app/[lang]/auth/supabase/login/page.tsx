import { SupabaseLoginView } from '@/sections/auth/supabase';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Supabase: Login',
};

export default function LoginPage() {
  return <SupabaseLoginView />;
}
