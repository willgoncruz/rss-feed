import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

type Props = {
  children: React.ReactNode;
};

const LanguageProvider = ({ children }: Props) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export default LanguageProvider;
