import { useEffect, useState } from 'react';

interface SVGModule {
  default: string;
}

/**
 * Dynamically import an SVG as a string
 *
 * @param fileName Canonical name of icon
 * @returns string | null
 */
export const useIconSvg = (fileName: string): string | null => {
  const [icon, setIcon] = useState<string | null>(null);

  useEffect(() => {
    const importSvg = async (): Promise<void> => {
      const importedIcon = (await import(
        `@cfpb/cfpb-design-system/src/components/cfpb-icons/icons/${fileName}.svg?raw`
      )) as SVGModule;

      setIcon(importedIcon.default);
    };

    importSvg().catch(() => setIcon(`Icon not found: ${fileName}.svg`));
  }, [fileName, setIcon]);

  return icon;
};
