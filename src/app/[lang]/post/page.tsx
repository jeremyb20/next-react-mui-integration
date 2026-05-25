import { PostListHomeView } from '@/sections/blog/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Post: List',
};

export default function PostListHomePage() {
  return <PostListHomeView />;
}
