import classnames from 'classnames';

interface ListProperties {
  children: JSX.Element | JSX.Element[];
  className?: string;
  isHorizontal?: boolean;
  isLinks?: boolean;
  isOrdered?: boolean;
  isSpaced?: boolean;
  isUnstyled?: boolean;
}

export default function List({
  children,
  className,
  isHorizontal,
  isLinks = false,
  isOrdered,
  isSpaced,
  isUnstyled
}: ListProperties): JSX.Element {
  const cnames = ['m-list'];
  if (isHorizontal) cnames.push('m-list--horizontal');
  if (isLinks) cnames.push('m-list--links');
  if (isSpaced) cnames.push('m-list--spaced');
  if (isUnstyled) cnames.push('m-list--unstyled');
  if (className) cnames.push(className);

  if (isOrdered) return <ol className={classnames(cnames)}>{children}</ol>;
  return <ul className={classnames(cnames)}>{children}</ul>;
}
