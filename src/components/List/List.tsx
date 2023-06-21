import classnames from 'classnames';

interface ListProperties {
  isHorizontal?: boolean;
  isLinks?: boolean;
  isOrdered?: boolean;
  isUnstyled?: boolean;
  isSpaced?: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function List({
  children,
  isHorizontal,
  isLinks = false,
  isOrdered,
  isSpaced,
  isUnstyled
}: ListProperties): JSX.Element {
  const cnames = ['m-list'];
  if (isHorizontal) cnames.push('m-list__horizontal');
  if (isLinks) cnames.push('m-list__links');
  if (isSpaced) cnames.push('m-list__spaced');
  if (isUnstyled) cnames.push('m-list__unstyled');

  if (isOrdered) return <ol className={classnames(cnames)}>{children}</ol>;
  return <ul className={classnames(cnames)}>{children}</ul>;
}
