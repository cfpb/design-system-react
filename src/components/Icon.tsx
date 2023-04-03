import classnames from 'classnames';
import { useIconSvg } from '../hooks/useIconSvg';

interface IconProperties {
  name: string;
  alt?: string;
  withBg?: boolean;
}

/**
 * CFPB DS Icon
 *
 * https://cfpb.github.io/design-system/foundation/iconography
 *
 * @param name Canonical icon name
 * @param alt Alt text for image
 * @param withBg With background?
 * @returns ReactElement | null
 */
export const Icon = ({ name, alt, withBg = false }: IconProperties) => {
  const shapeModifier = getShapeModifier(name, withBg);
  const fileName = `${name}${shapeModifier}`;
  const classes = ['cf-icon-svg', `cf-icon-svg__${fileName}`];

  const icon = useIconSvg(fileName);

  if (!icon) return null;

  const iconAttrs = `class="${classnames(classes)}" alt="${alt || name}"`;
  const iconHtml = `${icon}`.replace('<svg', `<svg ${iconAttrs} `);

  return (
    <span
      className='cf-icon-svg-wrapper'
      dangerouslySetInnerHTML={{ __html: iconHtml }}
    />
  );
};

const getShapeModifier = (name: string, withBg: boolean) => {
  if (!withBg) return '';
  if (isSquare.includes(name)) return '-square';
  return '-round';
};

const isSquare = [
  'email',
  'facebook',
  'flickr',
  'github',
  'linkedin',
  'pinterest',
  'twitter',
  'youtube'
];
