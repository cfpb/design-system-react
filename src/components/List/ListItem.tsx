import React from 'react';

interface ListItemProperties {
  children: JSX.Element | string;
}

export default function ListItem({
  children
}: ListItemProperties): JSX.Element {
  return <li className='m-list_item'>{children}</li>;
}

interface ListItemBuilderProperties {
  children: JSX.Element[];
  className?: string;
}
/**
 * A utility component that wraps each child element in an <li>,
 * while adding the provided `className` prop to the newly wrapped element.
 *
 * Example:
 * <ListItemBuilder className='m-list_link'>
 *   <a className='selected' href='/home' key='home'>Homepage</a>
 *   <a href='/away' key='away'>Other page</a>
 * </ListItemBuilder>
 *
 * Example Output:
 * <>
 *   <li class='m-list_item key='home'>
 *    <a class='m-list_link selected' href='/home'>Homepage</a>
 *   </li>
 *   <li class='m-list_item key='away'>
 *    <a class='m-list_link' href='/away'>Other page</a>
 *   </li>
 * </>
 *
 * @param children Elements to be wrapped in <li>
 * @param className Class name to be applied each of the `children` elements (not the <li>)
 * @returns Single nestable JSX element
 */
export function ListItemBuilder({
  children,
  className = ''
}: ListItemBuilderProperties): JSX.Element {
  return (
    <>
      {children.map((element: JSX.Element) => (
        <ListItem key={element.key}>
          {React.cloneElement(element, {
            className: `${className} ${element.props?.className ?? ''}`
          })}
        </ListItem>
      ))}
    </>
  );
}
