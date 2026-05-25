import { ChatView } from '@/sections/chat/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Chat',
};

export default function ChatPage() {
  return <ChatView />;
}
