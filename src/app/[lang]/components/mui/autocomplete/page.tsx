import AutocompleteView from '@/sections/_examples/mui/autocomplete-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'MUI: Autocomplete',
};

export default function AutocompletePage() {
  return <AutocompleteView />;
}
