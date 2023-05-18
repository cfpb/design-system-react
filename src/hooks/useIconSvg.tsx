import { useEffect, useState } from 'react';

/**
 * Dynamically import an SVG as a string
 *
 * @param fileName Canonical name of icon
 * @returns string | null
 */
export const useIconSvg = (fileName: string): string | null => {
  const [icon, setIcon] = useState<string | null>(null);

  useEffect(() => {
    const importSvg = async () => {
      if (!fileName) return null;

      const importedIcon = await import(
        `../../node_modules/@cfpb/cfpb-icons/src/icons/${fileName}.svg?raw`
      );

      if (!importedIcon || !importedIcon.default) return;
      setIcon(importedIcon.default);
    };

    importSvg().catch(() => setIcon(`Icon not found: ${fileName}.svg`));
  }, [fileName, setIcon]);

  return icon;
};
