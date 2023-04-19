var d=Object.defineProperty;var o=(e,c)=>d(e,"name",{value:c,configurable:!0});import{I as a}from"./Icon.32e7244c.js";import{b as t,F as s,j as n}from"./jsx-runtime.fed2d1b6.js";import"./index.cfa9e344.js";import"./iframe.a8b4a234.js";const g={title:"Components/Icon",component:a,parameters:{storySource:{source:`import { Icon } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: \`
### CFPB DS Icon component

Source: https://cfpb.github.io/design-system/foundation/iconography
\`
      }
    }
  }
};

const makeRows = (names: Array<string>) => {
  return names.map((name, idx) => (
    <>
      <tr>
        <td>
          <Icon name={name} key={idx} />
        </td>
        <td>
          <Icon name={name} key={idx} withBg />
        </td>
        <td>{name}</td>
      </tr>
    </>
  ));
};

export const icon = (): React.ReactElement => (
  <>
    <Icon name='approved' />
    <Icon name='approved' withBg />
  </>
);

export const statusIcons = (): React.ReactElement => {
  const names = ['approved', 'error', 'warning', 'update', 'updating'];
  return (
    <table>
      <thead>
        <th>icon</th>
        <th>withBg</th>
        <th>canonical name</th>
      </thead>
      <tbody>{makeRows(names)}</tbody>
    </table>
  );
};

export const webApplicationIcons = (): React.ReactElement => {
  const names = ['information', 'external-link'];
  return (
    <table>
      <thead>
        <th>icon</th>
        <th>withBg</th>
        <th>canonical name</th>
      </thead>
      <tbody>{makeRows(names)}</tbody>
    </table>
  );
};

export const navigationIcons = (): React.ReactElement => {
  const names = ['up', 'right', 'down', 'left'];
  return (
    <table>
      <thead>
        <th>icon</th>
        <th>withBg</th>
        <th>canonical name</th>
      </thead>
      <tbody>{makeRows(names)}</tbody>
    </table>
  );
};
`,locationsMap:{icon:{startLoc:{col:20,line:35},endLoc:{col:1,line:40},startBody:{col:20,line:35},endBody:{col:1,line:40}},"status-icons":{startLoc:{col:27,line:42},endLoc:{col:1,line:54},startBody:{col:27,line:42},endBody:{col:1,line:54}},"web-application-icons":{startLoc:{col:35,line:56},endLoc:{col:1,line:68},startBody:{col:35,line:56},endBody:{col:1,line:68}},"navigation-icons":{startLoc:{col:31,line:70},endLoc:{col:1,line:82},startBody:{col:31,line:70},endBody:{col:1,line:82}}}},docs:{description:{component:`
### CFPB DS Icon component

Source: https://cfpb.github.io/design-system/foundation/iconography
`}}}},i=o(e=>e.map((c,r)=>n(s,{children:t("tr",{children:[n("td",{children:n(a,{name:c},r)}),n("td",{children:n(a,{name:c,withBg:!0},r)}),n("td",{children:c})]})})),"makeRows"),b=o(()=>t(s,{children:[n(a,{name:"approved"}),n(a,{name:"approved",withBg:!0})]}),"icon"),y=o(()=>t("table",{children:[t("thead",{children:[n("th",{children:"icon"}),n("th",{children:"withBg"}),n("th",{children:"canonical name"})]}),n("tbody",{children:i(["approved","error","warning","update","updating"])})]}),"statusIcons"),w=o(()=>t("table",{children:[t("thead",{children:[n("th",{children:"icon"}),n("th",{children:"withBg"}),n("th",{children:"canonical name"})]}),n("tbody",{children:i(["information","external-link"])})]}),"webApplicationIcons"),I=o(()=>t("table",{children:[t("thead",{children:[n("th",{children:"icon"}),n("th",{children:"withBg"}),n("th",{children:"canonical name"})]}),n("tbody",{children:i(["up","right","down","left"])})]}),"navigationIcons"),B=["icon","statusIcons","webApplicationIcons","navigationIcons"];export{B as __namedExportsOrder,g as default,b as icon,I as navigationIcons,y as statusIcons,w as webApplicationIcons};
//# sourceMappingURL=Icon.stories.a236b0c9.js.map
