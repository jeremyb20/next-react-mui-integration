import MarkdownView from '@/sections/_examples/extra/markdown-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Markdown',
};

export default function MarkdownPage() {
  return <MarkdownView />;
}
