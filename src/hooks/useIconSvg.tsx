import type { FC, SVGProps } from 'react';
import { useEffect, useState } from 'react';

interface SVGModule {
  default: FC<SVGProps<SVGSVGElement>>;
}

/**
 * Dynamically import an SVG as a React Component
 *
 * @param fileName Canonical name of icon
 * @returns ReactComponent | null
 */
export const useIconSvg = (
  fileName: string
): FC<SVGProps<SVGSVGElement>> | null => {
  const [IconComponent, setIconComponent] = useState<FC<
    SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    let isMounted = true;

    const importSvg = async (): Promise<void> => {
      try {
        const importedIcon = (await import(
          `@cfpb/cfpb-design-system/src/components/cfpb-icons/icons/${fileName}.svg?react`
        )) as SVGModule;

        if (isMounted) {
          setIconComponent(() => importedIcon.default);
        }
      } catch (error) {
        console.error(`Icon not found: ${fileName}.svg`, error);
      }
    };

    importSvg();

    return () => {
      isMounted = false;
    };
  }, [fileName]);

  return IconComponent;
};