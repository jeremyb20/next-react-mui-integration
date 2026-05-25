import { SupabaseVerifyView } from '@/sections/auth/supabase';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Supabase: Verify',
};

export default function VerifyPage() {
  return <SupabaseVerifyView />;
}
