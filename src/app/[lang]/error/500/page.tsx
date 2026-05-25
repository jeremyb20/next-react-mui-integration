import { View500 } from '@/sections/error';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: '500 Internal Server Error',
};

export default function Page500() {
  return <View500 />;
}
