import classnames from 'classnames';

interface ParagraphProperties extends React.HTMLProps<HTMLParagraphElement> {
  isLead?: boolean;
}

/**
 * Paragraph text should provide an efficient and pleasant experience on every viewport size. Readable text makes good use of alignment, spacing, line length and height, and contrast.
 *
 * Source: https://cfpb.github.io/design-system/foundation/paragraphs
 */
export function Paragraph({
  children,
  isLead,
  className,
  ...properties
}: ParagraphProperties): JSX.Element {
  const cnames = [className];

  if (isLead) cnames.push('lead-paragraph');

  return (
    <p {...properties} className={classnames(cnames)}>
      {children}
    </p>
  );
}

export default Paragraph;
