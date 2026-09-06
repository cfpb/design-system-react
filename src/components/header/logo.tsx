import type { JSX } from 'react';
import CfpbLogoEn from '../../assets/images/cfpb_logo.svg?url';
import CfpbLogoEs from '../../assets/images/cfpb_logo_es.svg?url';

export type LogoLanguage = 'en' | 'es';

const logoSources: Record<LogoLanguage, string> = {
  en: CfpbLogoEn,
  es: CfpbLogoEs,
};

const logoAltText: Record<LogoLanguage, string> = {
  en: 'CFPB Logo',
  es: 'Oficina para la Protección Financiera del Consumidor',
};

export interface LogoProperties {
  language?: LogoLanguage;
  className?: string;
}

export function Logo({
  language = 'en',
  className = 'o-header__logo-img',
}: LogoProperties): JSX.Element {
  return (
    <img
      className={className}
      src={logoSources[language]}
      alt={logoAltText[language]}
    />
  );
}
