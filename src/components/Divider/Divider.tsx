function Divider({
  className = '',
  ...properties
}: React.HTMLProps<HTMLDivElement>): JSX.Element {
  return <div className={`content_line ${className}`} {...properties} />;
}

export default Divider;
