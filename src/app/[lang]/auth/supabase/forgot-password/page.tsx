import { SupabaseForgotPasswordView } from '@/sections/auth/supabase';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Supabase: Forgot Password',
};

export default function ForgotPasswordPage() {
  return <SupabaseForgotPasswordView />;
}
