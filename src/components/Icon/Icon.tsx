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
  'twitter',
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
 * @param withBg With background?
 * @param size Match the icon size to a specified HTML element or provide a custom size. By default the icon size is determined by it's parent element's font-size.
 * @returns ReactElement | null
 */
export const Icon = ({
  name,
  alt,
  withBg = false,
  size = 'inherit',
  ...others
}: IconProperties): JSX.Element | null => {
  const shapeModifier = getShapeModifier(name, withBg);
  const fileName = `${name}${shapeModifier}`;
  const classes = ['cf-icon-svg', `cf-icon-svg__${fileName}`];

  const icon = useIconSvg(fileName);

  if (!icon) return null;

  const iconAttributes = [
    `class="${classNames(classes)}"`,
    'role="img"',
    `alt="${alt ?? name}"`,
    `style="font-size: ${sizeMap[size] || size}"`
  ].join(' ');

  const iconHtml = `${icon}`.replace('<svg', `<svg ${iconAttributes} `);

  return (
    <span
      className='cf-icon-svg-wrapper'
      dangerouslySetInnerHTML={{ __html: iconHtml }}
      {...others}
    />
  );
};
