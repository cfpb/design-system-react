interface ListItemProperties {
  children: JSX.Element | string;
}

export default function ListItem({
  children
}: ListItemProperties): JSX.Element {
  return <li className='m-list_item'>{children}</li>;
}
