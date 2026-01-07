function Divider({
  className = '',
  ...properties
}: React.HTMLProps<HTMLDivElement>): JSX.Element {
  return <div className={`content__line ${className}`} {...properties} />;
}

export default Divider;
