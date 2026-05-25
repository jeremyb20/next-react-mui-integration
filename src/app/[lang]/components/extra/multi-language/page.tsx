import MultiLanguageView from '@/sections/_examples/extra/multi-language-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Multi Language',
};

export default function MultiLanguagePage() {
  return <MultiLanguageView />;
}
