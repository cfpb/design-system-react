/* DSR component that hasn't been created yet */

import classnames from 'classnames';

export interface FormProperties {
  id: string;
  className?: string;
  onSubmit: React.FormEvent;
  children: JSX.Element[];
}

export const DSRForm = ({
  className = '',
  children,
  ...others
}: FormProperties): JSX.Element => {
  const cnames = ['o-form', className];

  return (
    <form {...others} className={classnames(cnames)}>
      {children}
    </form>
  );
};
