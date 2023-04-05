var d=Object.defineProperty;var o=(e,c)=>d(e,"name",{value:c,configurable:!0});import{I as a}from"./Icon.0090dfe5.js";import{b as t,F as s,j as n}from"./jsx-runtime.c8b0a09d.js";import"./iframe.42f00b97.js";const u={title:"Components/Icon",component:a,parameters:{storySource:{source:`import { Icon } from './Icon';

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
`}}}},i=o(e=>e.map((c,r)=>n(s,{children:t("tr",{children:[n("td",{children:n(a,{name:c},r)}),n("td",{children:n(a,{name:c,withBg:!0},r)}),n("td",{children:c})]})})),"makeRows"),g=o(()=>t(s,{children:[n(a,{name:"approved"}),n(a,{name:"approved",withBg:!0})]}),"icon"),b=o(()=>t("table",{children:[t("thead",{children:[n("th",{children:"icon"}),n("th",{children:"withBg"}),n("th",{children:"canonical name"})]}),n("tbody",{children:i(["approved","error","warning","update","updating"])})]}),"statusIcons"),y=o(()=>t("table",{children:[t("thead",{children:[n("th",{children:"icon"}),n("th",{children:"withBg"}),n("th",{children:"canonical name"})]}),n("tbody",{children:i(["information","external-link"])})]}),"webApplicationIcons"),w=o(()=>t("table",{children:[t("thead",{children:[n("th",{children:"icon"}),n("th",{children:"withBg"}),n("th",{children:"canonical name"})]}),n("tbody",{children:i(["up","right","down","left"])})]}),"navigationIcons"),I=["icon","statusIcons","webApplicationIcons","navigationIcons"];export{I as __namedExportsOrder,u as default,g as icon,w as navigationIcons,b as statusIcons,y as webApplicationIcons};
//# sourceMappingURL=Icon.stories.e84dab02.js.map
