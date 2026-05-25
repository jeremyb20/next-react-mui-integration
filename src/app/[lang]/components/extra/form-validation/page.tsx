import FormValidationView from '@/sections/_examples/extra/form-validation-view';
import { Metadata } from 'next';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Components: Form Validation',
};

export default function FormValidationPage() {
  return <FormValidationView />;
}
