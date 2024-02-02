import Link from '../Link/Link';

export const heading = 'Heading 1';

export const subheading =
  'Lead paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const description =
  'Descriptive paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.';

export const callToActionText = 'Call-to-action link';

export const callToAction = <Link href='/'>{callToActionText}</Link>;

export const placeholders = {
  heading,
  subheading,
  description,
  callToAction
};

export default {
  heading,
  description,
  subheading,
  callToAction,
  callToActionText
};
