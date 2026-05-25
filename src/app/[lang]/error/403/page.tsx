import { View403 } from '@/sections/error';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: '403 Forbidden',
};

export default function Page403() {
  return <View403 />;
}
