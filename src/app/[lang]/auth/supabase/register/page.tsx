import { SupabaseRegisterView } from '@/sections/auth/supabase';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Supabase: Register',
};

export default function RegisterPage() {
  return <SupabaseRegisterView />;
}
