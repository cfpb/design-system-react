import type { JSXElement } from '../../types/jsxElement';

export type LanguageDefinition = Record<
  string | symbol,
  Record<string | symbol, string>
>;

export const LanguageMap: LanguageDefinition = {
  en: { label: 'English', code: 'en', href: '/en/' },
  es: { label: 'Español', code: 'es', href: '/es/' },
  zh: { label: '中文', code: 'zh' },
  vi: { label: 'Tiếng Việt', code: 'vi' },
  ko: { label: '한국어', code: 'ko' },
  tl: { label: 'Tagalog', code: 'tl' },
  ru: { label: 'Pусский', code: 'ru' },
  ar: { label: 'العربية', code: 'ar' },
  ht: { label: 'Kreyòl Ayisyen', code: 'ht' }
};

export const AllLanguageCodes = [
  'en',
  'es',
  'zh',
  'vi',
  'ko',
  'tl',
  'ru',
  'ar',
  'ht'
];

export interface LanguageLinkProperties {
  code: string;
  href?: string;
  label?: string;
  languageMap?: LanguageDefinition;
}

/**
 * CFGov language link
 *
 * @param code Language code
 * @param href URL
 * @param label Display text
 * @param languageMap A collection of language definitions
 *
 * @returns JSX.Element
 */
export const LanguageLink = ({
  code,
  href,
  label,
  languageMap = LanguageMap,
  ...others
}: LanguageLinkProperties): JSXElement => {
  const config = languageMap[code];
  let codeResolved = code;
  let langResolved = code;
  let labelResolved = label;
  let hrefResolved = href;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (config) {
    codeResolved = config.code;
    langResolved = config.code;
    labelResolved = label ?? config.label;
    hrefResolved = config.href || href;
  }

  return (
    <a
      href={hrefResolved ?? `/language/${codeResolved}/`}
      hrefLang={codeResolved}
      lang={langResolved}
      {...others}
    >
      {labelResolved}
    </a>
  );
};
