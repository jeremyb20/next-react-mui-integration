import MenuView from '@/sections/_examples/mui/menu-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: Menu',
};

export default function MenuPage() {
  return <MenuView />;
}
