var d=Object.defineProperty;var c=(e,o)=>d(e,"name",{value:o,configurable:!0});import{I as a}from"./Icon.5d6e914b.js";import{b as t,F as r,j as n}from"./jsx-runtime.7c16c7a8.js";import"./iframe.c176fab8.js";const u={title:"Components/Icon",component:a,parameters:{storySource:{source:`import { Icon } from './Icon';

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
`,locationsMap:{icon:{startLoc:{col:20,line:35},endLoc:{col:1,line:40},startBody:{col:20,line:35},endBody:{col:1,line:40}},"status-icons":{startLoc:{col:27,line:42},endLoc:{col:1,line:54},startBody:{col:27,line:42},endBody:{col:1,line:54}},"web-application-icons":{startLoc:{col:35,line:56},endLoc:{col:1,line:68},startBody:{col:35,line:56},endBody:{col:1,line:68}}}},docs:{description:{component:`
### CFPB DS Icon component

Source: https://cfpb.github.io/design-system/foundation/iconography
`}}}},s=c(e=>e.map((o,i)=>n(r,{children:t("tr",{children:[n("td",{children:n(a,{name:o},i)}),n("td",{children:n(a,{name:o,withBg:!0},i)}),n("td",{children:o})]})})),"makeRows"),b=c(()=>t(r,{children:[n(a,{name:"approved"}),n(a,{name:"approved",withBg:!0})]}),"icon"),g=c(()=>t("table",{children:[t("thead",{children:[n("th",{children:"icon"}),n("th",{children:"withBg"}),n("th",{children:"canonical name"})]}),n("tbody",{children:s(["approved","error","warning","update","updating"])})]}),"statusIcons"),y=c(()=>t("table",{children:[t("thead",{children:[n("th",{children:"icon"}),n("th",{children:"withBg"}),n("th",{children:"canonical name"})]}),n("tbody",{children:s(["information","external-link"])})]}),"webApplicationIcons"),I=["icon","statusIcons","webApplicationIcons"];export{I as __namedExportsOrder,u as default,b as icon,g as statusIcons,y as webApplicationIcons};
//# sourceMappingURL=Icon.stories.9e189cd1.js.map
