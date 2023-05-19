import classnames from 'classnames';

interface LabelProperties {
  children: React.ReactNode;
  inline?: boolean;
  htmlFor: string;
  className?: string;
}

const baseStyles = ['a-label'];

export const Label = ({
  children,
  inline = false,
  htmlFor,
  className,
  ...other
}: JSX.IntrinsicElements['label'] & LabelProperties): React.ReactElement => {
  const styles = [...baseStyles, inline ? '' : 'a-label__heading'];
  const classes = [className, ...styles];

  return (
    <label {...other} className={classnames(classes)} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
