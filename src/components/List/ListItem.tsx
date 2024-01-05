import classNames from 'classnames';
import React from 'react';

export default function ListItem({
  children,
  className,
  ...properties
}: React.HTMLProps<HTMLLIElement>): JSX.Element {
  return (
    <li className={classNames('m-list_item', className)} {...properties}>
      {children}
    </li>
  );
}

interface ListItemBuilderProperties {
  children: JSX.Element[];
  className?: string;
  itemClassname?: string;
}
/**
 * A utility component that wraps each child element in an <li>,
 * while adding the provided `className` prop to the newly wrapped element.
 *
 * Example:
 * <ListItemBuilder className='u-w33pct' itemClassname='m-list_link'>
 *   <a className='selected' href='/home' key='home'>Homepage</a>
 *   <a href='/away' key='away'>Other page</a>
 * </ListItemBuilder>
 *
 * Example Output:
 * <>
 *   <li class='m-list_item u-w33pct' key='home'>
 *     <a class='m-list_link selected' href='/home'>Homepage</a>
 *   </li>
 *   <li class='m-list_item u-w33pct' key='away'>
 *     <a class='m-list_link' href='/away'>Other page</a>
 *   </li>
 * </>
 *
 * @param children Elements to be wrapped in <li>
 * @param itemClassname Class name to be applied each of the `children` elements (not the <li>)
 * @param className Class name to be applied each of the <li> elements
 * @returns Single nestable JSX element
 */
export function ListItemBuilder({
  children,
  itemClassname = '',
  className
}: ListItemBuilderProperties): JSX.Element {
  return (
    <>
      {children.map((element: JSX.Element) => (
        <ListItem key={element.key} className={className}>
          {React.cloneElement(element, {
            className: `${itemClassname} ${element.props?.className ?? ''}`
          })}
        </ListItem>
      ))}
    </>
  );
}
