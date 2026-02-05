## Verification checklist

### 1. Verify the CFPB Design System (React) component against the CFPB Design System
#### For existing components 
- [ ] Component intro text has been copied from the DS page
- [ ] Source link to component's DS page (ex - Source: https://cfpb.github.io/design-system/components/banner-notification)
- [ ] Each DS variant is implemented as a separate story
  - [ ] Story name is sentence case (ex. List Link => List link)
  - [ ] Naming is consistent with the DS
  - [ ] Same component names, same placeholder text, etc.
- [ ] Order of stories matches between DS/DSR
- [ ] Component is built correctly
  - [ ] Visually compare DSR implementation to DS
  - [ ] Verify that React renders the HTML markup the same as in the DS (if at all possible)
  - [ ] Verify that DS classes (organisms, molecules, atoms) are used, as opposed to styles defined in DSR
- [ ] Manual visual review has been conducted and component has passed this review

#### For new components 
- [ ] All steps for existing components plus the following steps
- [ ] The new component has been added to the CFPB Design System OR
- [ ] The CFPB Design System maintainers have been alerted that there is a new component that must be added to the system
- [ ] Documentation has been written for the new component (this is not a blocker for moving a component to verified)

### 2. Run accessibility checks 
- [ ] Component is keyboard-friendly (navigable with tab, space, enter, arrow keys, etc.)
- [ ] Component does not introduce new errors or warnings in [WAVE](https://wave.webaim.org/extension/)
- [ ] Component is screen reader friendly ([screen reader testing demo](https://drive.google.com/file/d/189A9Wx_T1C49TES5ZtYXlIFbJbLP472p/view))
  - [ ] Is all the meaningful visual information and text of the component conveyed by the screen reader? (text, non-decorative image descriptions, etc.)
  - [ ] When interacting with the component using a screen reader, do you have all the information you need to use it? (selected vs unselected, button vs link, expanded vs collapsed, etc.)
  - [ ] Does the component have similar screen reader behavior as the sample components in WCAG, the CFPB design system, WebAIM, or similar accessibility examples? https://www.w3.org/TR/WCAG21/
- For reference: [CFPB manual web accessibility audit](https://cfpb.github.io/design-system/guidelines/accessibility-audit-tools#cfpb-manual-web-accessibility-audit-1) 

### 3. Verify component unit tests
- [ ] Verify component unit tests are implemented and passing - 85% or greater (ex: `yarn vitest Button`)

### 4. Prepare a PR for Code Review
  - [ ] [Create a PR](https://github.com/cfpb/design-system-react/pull/218) with the name: `design(XXXX): final design review for XXXX component`
  - [ ] Copy this verification checklist that's almost complete into the PR description

### 5. Conduct Code PR review
- [ ] [Submit PR](https://github.com/cfpb/design-system-react/pull/207) with any necessary changes for code review by frontend devs
  
### 6. Conduct Design PR review
- [ ] Apply GitHub label "[design](https://github.com/cfpb/design-system-react/labels/design)"
- [ ] Change [the component's](https://github.com/cfpb/design-system-react/pull/218/commits/f745c3c9043f9ab1e04c3150122d93b2df4e54a3) status from `Draft` to `Verified` in Storybook
- [ ] Add an additional reviewer
- [ ] Ping a developer on Slack in the Design System in React channel when ready

### 7. Verify component
- [ ] Merge when design review completed to finish component verification 🎉
