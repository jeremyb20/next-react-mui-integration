import { SupabaseNewPasswordView } from '@/sections/auth/supabase';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Supabase: New Password',
};

export default function NewPasswordPage() {
  return <SupabaseNewPasswordView />;
}
