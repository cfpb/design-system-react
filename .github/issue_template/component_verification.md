# Verification checklist

### 1. Verify the DSR component against the DS

### For existing components 

**Stories page**
- [ ] Introduction text matches the DS component page
- [ ] Link to the DS component page is included (e.g., Source: https://cfpb.github.io/design-system/components/buttons)
- [ ] Each DS component variant is implemented as a separate story
- [ ] Story names are written in sentence case (eg., Radio button NOT Radio Button)
- [ ] Component and variant names match the DS without repeating the name of the parent component (eg., Button => Primary NOT Button => Primary button )
- [ ] Ordering of component and variants matches the ordering in the DS

**Component**
- [ ] Component passes a manual visual review when compared with the DS component 
- [ ] React renders the HTML markup the same as in the DS (To verify, right click the component in the storybook preview and choose "Inspect." Compare the HTML markup that you see in the dev-tools with the example provided in DS when you click "Show details" within the component)
- [ ] Component uses DS classes (organisms, molecules, atoms), as opposed to styles defined in DSR

### For new components 
All steps for existing components **plus** the following steps:
- [ ] The new component has been added to the CFPB Design System OR
- [ ] A "Component change or addition request" issue has been submitted on the DS repo (https://github.com/cfpb/design-system/issues) 
   - [ ] DS documentation has been written for the new component (this is not a blocker for moving a component to verified)

### 2. Run accessibility checks 
- [ ] Component is keyboard-friendly (navigable with tab, space, enter, arrow keys, etc.)
- [ ] Component does not introduce new errors or warnings in [WAVE](https://wave.webaim.org/extension/)
- [ ] Component is screen reader friendly ([screen reader testing demo](https://drive.google.com/file/d/189A9Wx_T1C49TES5ZtYXlIFbJbLP472p/view))
  - [ ] All the meaningful visual information and text of the component is conveyed by the screen reader (text, non-decorative image descriptions, etc.)
  - [ ] When interacting with the component using a screen reader, all of the required information required to use it is available (selected vs unselected, button vs link, expanded vs collapsed, etc.)
  - [ ] The component has similar screen reader behavior as the sample components in WCAG, the CFPB design system, WebAIM, or similar accessibility examples? https://www.w3.org/TR/WCAG21/
- For reference: [CFPB manual web accessibility audit](https://cfpb.github.io/design-system/guidelines/accessibility-audit-tools#cfpb-manual-web-accessibility-audit-1) 

### 3. Verify component unit tests
- [ ] Verify component unit tests are implemented and passing - 85% or greater (ex: `yarn vitest ComponentName`)

### 4. Prepare a PR for code review
  - [ ] [Create a PR](https://github.com/cfpb/design-system-react/pull/218) with the name: `Final design review for XXXX component`
  - [ ] Copy this verification checklist that's almost complete into the PR description
  
### 5. Conduct code PR review
- [ ] [Submit PR](https://github.com/cfpb/design-system-react/pull/207) with any necessary changes for code review by frontend devs
 
### 6. Conduct component verification PR review
- [ ] Apply GitHub label "[component-verification](https://github.com/cfpb/design-system-react/labels/component-verification)"
- [ ] Change [the component's](https://github.com/cfpb/design-system-react/pull/218/commits/f745c3c9043f9ab1e04c3150122d93b2df4e54a3) status from `Draft` to `Verified` in Storybook
- [ ] Add a DSR contributor as a reviewer (must include a designer review)
- [ ] Ping DSR contributors in Slack in the Design System in React channel when ready

### 7. Verify component
- [ ] Merge when design and dev review completed to finish component verification 🎉

#### Screenshots
