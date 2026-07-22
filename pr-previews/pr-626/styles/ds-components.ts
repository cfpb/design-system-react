/**
 * Curated Design System component styles bundled into `dist/index.css`.
 *
 * When adding a React component that uses DS class names, add the matching DS
 * SCSS import here (once per file — duplicates are unnecessary). Component
 * `.tsx` files should not import DS styles directly.
 *
 * Styles listed here are bundled into `dist/index.css` via `entry-styles.ts` and
 * loaded in Storybook the same way.
 */

// Icons — Icon (and any component with .cf-icon-svg)
import '@cfpb/cfpb-design-system/src/components/cfpb-icons/icon.scss';

// Buttons — Button
import '@cfpb/cfpb-design-system/src/components/cfpb-buttons/button.scss';
import '@cfpb/cfpb-design-system/src/components/cfpb-buttons/button-link.scss';

// Forms — Checkbox, RadioButton, Fieldset, Label, HelperText, TextInput,
// TextArea, SelectSingle, SelectMulti, AlertFieldLevel
import '@cfpb/cfpb-design-system/src/components/cfpb-forms/form.scss';
import '@cfpb/cfpb-design-system/src/components/cfpb-forms/form-field.scss';
import '@cfpb/cfpb-design-system/src/components/cfpb-forms/form-alert.scss';
import '@cfpb/cfpb-design-system/src/components/cfpb-forms/label.scss';
import '@cfpb/cfpb-design-system/src/components/cfpb-forms/text-input.scss';
import '@cfpb/cfpb-design-system/src/components/cfpb-forms/select.scss';
import '@cfpb/cfpb-design-system/src/components/cfpb-forms/multiselect.scss';

// Typography — Heading (type="slug"), Link
import '@cfpb/cfpb-design-system/src/components/cfpb-typography/slug-header.scss';
import '@cfpb/cfpb-design-system/src/components/cfpb-typography/link.scss';

// Layout — Divider (.content__line), Well
import '@cfpb/cfpb-design-system/src/components/cfpb-layout/layout.scss';
import '@cfpb/cfpb-design-system/src/components/cfpb-layout/well.scss';

// Notifications — Alert (page-level)
import '@cfpb/cfpb-design-system/src/components/cfpb-notifications/notification.scss';

// Pagination — Pagination
import '@cfpb/cfpb-design-system/src/components/cfpb-pagination/pagination.scss';

// Tables — Table
import '@cfpb/cfpb-design-system/src/components/cfpb-tables/table.scss';
