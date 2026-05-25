import EditorView from '@/sections/_examples/extra/editor-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Editor',
};

export default function EditorPage() {
  return <EditorView />;
}
