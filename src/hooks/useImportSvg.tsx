import { useEffect, useState } from 'react';

/**
 * Dynamically import an SVG as a string
 *
 * @param path URL to SVG file
 * @returns string | null
 */
export const useImportSvg = (path: string) => {
  let [icon, setIcon] = useState(null);

  useEffect(() => {
    const importSvg = async () => {
      if (!path) return null;

      const importedIcon = await import(path);
      if (!importedIcon || !importedIcon.default) return;

      setIcon(importedIcon.default);
    };

    importSvg();
  }, [path, setIcon]);

  if (!icon) return null;
  return icon;
};
