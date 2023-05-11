import { useEffect, useState } from 'react';

/**
 * Dynamically import an SVG as a string
 *
 * @param path URL to SVG file
 * @returns string | null
 */
export const useIconSvg = (fileName: string) => {
  let [icon, setIcon] = useState(null);

  useEffect(() => {
    const importSvg = async () => {
      if (!fileName) return null;

      const importedIcon = await import(
        `../../node_modules/@cfpb/cfpb-icons/src/icons/${fileName}.svg?raw`
      );

      if (!importedIcon || !importedIcon.default) return;

      setIcon(importedIcon.default);
    };

    importSvg();
  }, [fileName, setIcon]);

  if (!icon) return null;
  return icon;
};
