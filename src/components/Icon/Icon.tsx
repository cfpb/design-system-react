import classNames from 'classnames';
import { useIconSvg } from '../../hooks/useIconSvg';
import { numberIcons } from './iconLists';

// Design System font sizes for HTML elements
const sizeMap: Record<string, string> = {
  h1: '34px',
  h2: '26px',
  h3: '22px',
  h4: '18px',
  h5: '14px',
  p: '16px',
  sub: '12px'
};

// Icons who's background is square as opposed to round
const isSquare = new Set([
  'email',
  'facebook',
  'flickr',
  'github',
  'linkedin',
  'pinterest',
  'x',
  'youtube'
]);

// Is this an number icon, based on the icon name?
const isNumber = new Set(numberIcons);

/**
 * Get the name of the icon with the correct shape modifier
 *
 * Most icons use a -round suffix.
 * A few use a -square suffix.
 * Number icons are either -open or -closed.
 *
 * @param name Canonical icon name
 * @param withBg With background?
 * @returns string
 */
const getShapeModifier = (name: string, withBg: boolean): string => {
  if (isNumber.has(name)) {
    if (withBg) return '-closed';
    return '-open';
  }
  if (!withBg) return '';
  if (isSquare.has(name)) return '-square';
  return '-round';
};

interface IconProperties {
  name: string;
  alt?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  isPresentational?: boolean;
  withBg?: boolean;
  size?: string;
}

/**
 * CFPB DS Icon
 *
 * https://cfpb.github.io/design-system/foundation/iconography
 *
 * @param name Canonical icon name
 * @param alt Alt text for image
 * @param ariaLabel Labels the SVG for accessibility
 * @param ariaLabelledby ID of element that labels the SVG for accessibility
 * @param ariaDescribedby ID of element that describes the SVG for accessibility
 * @param isPresentational Is SVG purely presentational and should be ignored by screen readers?
 * @param withBg With background?
 * @param size Match the icon size to a specified HTML element or provide a custom size. By default the icon size is determined by it's parent element's font-size.
 * @returns ReactElement | null
 */
export const Icon = ({
  name,
  alt,
  ariaLabel = '',
  ariaLabelledby = '',
  ariaDescribedby = '',
  isPresentational = false,
  withBg = false,
  size = 'inherit',
  ...others
}: IconProperties): JSX.Element | null => {
  const shapeModifier = getShapeModifier(name, withBg);
  const fileName = `${name}${shapeModifier}`;
  const IconComponent = useIconSvg(fileName);

  if (!IconComponent) return null;

  const classes = classNames('cf-icon-svg', `cf-icon-svg--${fileName}`);
  const fontSize = sizeMap[size] || size;

  return (
    <IconComponent
      className={classes}
      style={{ fontSize }}
      role={isPresentational ? undefined : 'img'}
      aria-label={ariaLabel || (!isPresentational ? alt ?? name : undefined)}
      aria-labelledby={ariaLabelledby || undefined}
      aria-describedby={ariaDescribedby || undefined}
      aria-hidden={isPresentational ? 'true' : undefined}
      {...others}
    />
  );
};
