import classNames from 'classnames';
import { Icon } from '../Icon/Icon';

interface ButtonIconProperties extends React.HTMLProps<HTMLSpanElement> {
  name?: string;
  isLeft?: boolean;
  isRight?: boolean;
}

/**
 * Display an icon within a Button
 */
export const ButtonIcon = ({
  name,
  isLeft,
  isRight,
  className,
  ...properties
}: ButtonIconProperties): React.ReactNode => {
  if (!name) return null;

  let cname = '';
  if (isLeft) cname = 'a-btn__icon--on-left';
  if (isRight) cname = 'a-btn__icon--on-right';

  return (
    <span
      className={classNames(['a-btn__icon', cname, className])}
      {...properties}
    >
      <Icon name={name} />
    </span>
  );
};
