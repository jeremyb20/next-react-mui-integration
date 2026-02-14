'use client';

import { I18nextProvider } from 'react-i18next';
// import i18n from '@/locales/i18n';
import ThemeProvider from '@/theme';
import QueryProvider from '@/query/query-provider';
import { AuthProvider } from '@/auth/context/jwt';
import LocalizationProvider from '@/locales/localization-provider';
import { SettingsProvider, defaultSettings } from '@/components/settings';
import SnackbarProvider from '../snackbar/snackbar-provider';
import { CheckoutProvider } from '@/sections/checkout/context/checkout-provider';
import ProgressBar from '../progress-bar';
import { MotionLazy } from '../animate/motion-lazy';
import i18next from '@/app/i18n/i18next';
interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <I18nextProvider i18n={i18next}>
      <QueryProvider>
        <AuthProvider>
          <LocalizationProvider>
            <SettingsProvider defaultSettings={defaultSettings}>
              <ThemeProvider>
                <MotionLazy>
                  <SnackbarProvider>
                    <CheckoutProvider>
                      <ProgressBar />
                      {children}
                    </CheckoutProvider>
                  </SnackbarProvider>
                </MotionLazy>
              </ThemeProvider>
            </SettingsProvider>
          </LocalizationProvider>
        </AuthProvider>
      </QueryProvider>
    </I18nextProvider>
  );
}
