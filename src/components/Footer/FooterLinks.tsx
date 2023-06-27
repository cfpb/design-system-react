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
    <List className='o-footer_nav-list'>
      <ListItemBuilder className='m-list_link'>{children}</ListItemBuilder>
    </List>
  );
};

/**
 * Wrapper for Social Navigation Links
 */
export const SocialLinks = ({ children }: WrapperProperties): JSXElement => {
  if (isEmptyArray(children)) return null;

  return (
    <div className='block block__flush-top block__flush-bottom block__padded-top'>
      <div className='m-social-media m-social-media__follow'>
        <List className='m-social-media_icons' isUnstyled isHorizontal>
          <ListItemBuilder className='m-social-media_icon'>
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
    <div className='o-footer_col'>
      <List className='o-footer_list'>
        <ListItemBuilder className='m-list_link'>{children}</ListItemBuilder>
      </List>
    </div>
  );
};
