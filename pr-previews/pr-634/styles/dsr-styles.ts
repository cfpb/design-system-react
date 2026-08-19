/**
 * DSR-authored styles only — companion to Pattern B apps.
 *
 * Pattern B already loads full `@cfpb/cfpb-design-system` CSS. Import this
 * entry’s built `dsr.css` for Tabs and other React-only overrides that are
 * not part of the Design System package.
 *
 * Do not add Design System molecule/organism SCSS here (those belong in
 * `ds-components.ts` for Pattern A, or come from full DS CSS on Pattern B).
 * Do not import fonts or `_shared.scss` here.
 */

// Tabs (not yet in cfpb-design-system)
import '../../components/tabs/tab.scss';

// DSR overrides / React-only layout chrome
import '../../components/alert/alert.scss';
import '../../components/banner/banner.scss';
import '../../components/breadcrumb/breadcrumb.scss';
import '../../components/checkbox/checkbox.scss';
import '../../components/fieldset/fieldset.scss';
import '../../components/footer/footer.scss';
import '../../components/footer/social-media.scss';
import '../../components/grid/grid.scss';
import '../../components/header/header.scss';
import '../../components/header/responsive-menu.scss';
import '../../components/hero/hero.scss';
import '../../components/layout/layout.scss';
import '../../components/link/link.scss';
import '../../components/secondary-nav/secondary-nav.scss';
import '../../components/skip-nav/skip-nav.scss';
import '../../components/table/table.scss';
import '../../components/text-input/cfpb-text-input.scss';
