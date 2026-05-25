import { CalendarView } from '@/sections/calendar/view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Dashboard: Calendar',
};

export default function CalendarPage() {
  return <CalendarView />;
}
