interface DividerProperties {
  className?: string;
}

export default function Divider({
  className = '',
  ...properties
}: DividerProperties): JSX.Element {
  return <div className={`content_line ${className}`} {...properties} />;
}
