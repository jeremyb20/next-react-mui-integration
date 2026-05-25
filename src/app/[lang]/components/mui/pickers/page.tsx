import PickerView from '@/sections/_examples/mui/picker-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: Picker',
};

export default function PickerPage() {
  return <PickerView />;
}
