import { PostListView } from '@/sections/blog/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Post List',
};

export default function PostListPage() {
  return <PostListView />;
}
