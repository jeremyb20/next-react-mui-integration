import { PostCreateView } from '@/sections/blog/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Create a new post',
};

export default function PostCreatePage() {
  return <PostCreateView />;
}
