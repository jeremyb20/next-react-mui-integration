import { KanbanView } from '@/sections/kanban/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Kanban',
};

export default function KanbanPage() {
  return <KanbanView />;
}
