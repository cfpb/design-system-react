import type { JSXElement } from '../../types/jsxElement';
import List from '../List/List';
import { ListItemBuilder } from '../List/ListItem';

interface WrapperProperties {
  children: JSX.Element[];
}

const isEmptyArray = (children: JSXElement[]): boolean => children.length === 0;

/**
 * Wrapper for Footer Navigation Links
 */
export const NavLinks = ({ children }: WrapperProperties): JSXElement => {
  if (isEmptyArray(children)) return null;

  return (
    <List className='o-footer__nav-list m-list--links m-list--horizontal'>
      <ListItemBuilder itemClassname='m-list__link'>{children}</ListItemBuilder>
    </List>
  );
};

/**
 * Wrapper for Social Navigation Links
 */
export const SocialLinks = ({ children }: WrapperProperties): JSXElement => {
  if (isEmptyArray(children)) return null;

  return (
    <div className='block block--flush-top block--flush-bottom block--padded-top'>
      <div className='m-social-media m-social-media--follow'>
        <List className='m-social-media__icons' isUnstyled isHorizontal>
          <ListItemBuilder itemClassname='m-social-media__icon'>
            {children}
          </ListItemBuilder>
        </List>
      </div>
    </div>
  );
};

/**
 * Wrapper for column of Footer Links
 */
export const FooterLinksColumn = ({
  children
}: WrapperProperties): JSXElement => {
  if (isEmptyArray(children)) return null;

  return (
    <div className='o-footer__col'>
      <List className='o-footer__list'>
        <ListItemBuilder itemClassname='m-list__link'>
          {children}
        </ListItemBuilder>
      </List>
    </div>
  );
};
