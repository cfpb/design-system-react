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
    const importSvg = async (): Promise<void> => {
      const path = `../assets/icons/${fileName}.svg?raw`;

      const importedIcon = await import(path);
      setIcon(importedIcon.default);
    };

    importSvg().catch(() => setIcon(`Icon not found: ${fileName}.svg`));
  }, [fileName, setIcon]);

  return icon;
};
