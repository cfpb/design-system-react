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
  fileName: string,
): FC<SVGProps<SVGSVGElement>> | null => {
  const [iconComponent, setIconComponent] = useState<
    SVGModule['default'] | null
  >(null);

  useEffect(() => {
    const isTest =
      typeof process !== 'undefined' && process.env?.NODE_ENV === 'test';

    let isMounted = true;

    const importSvg = async (): Promise<void> => {
      try {
        const importedIcon = (await import(
          `@cfpb/cfpb-design-system/src/components/cfpb-icons/icons/${fileName}.svg?react`
        )) as SVGModule;

        if (isMounted) {
          if (isTest) {
            const { act } = await import('react-dom/test-utils');
            act(() => {
              setIconComponent(() => importedIcon.default);
            });
          } else {
            setIconComponent(() => importedIcon.default);
          }
        }
      } catch {
        const errorIcon = (await import(
          `@cfpb/cfpb-design-system/src/components/cfpb-icons/icons/error.svg?react`
        )) as SVGModule;
        if (isMounted) {
          if (isTest) {
            const { act } = await import('react-dom/test-utils');
            act(() => {
              setIconComponent(() => errorIcon.default);
            });
          } else {
            setIconComponent(() => errorIcon.default);
          }
        }
      }
    };

    void importSvg();

    return () => {
      isMounted = false;
    };
  }, [fileName]);

  return iconComponent;
};
