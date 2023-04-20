var y=Object.defineProperty;var a=(n,o)=>y(n,"name",{value:o,configurable:!0});import{c as _}from"./index.cfa9e344.js";import{I as u}from"./Icon.7052b3a7.js";import{j as e,b as c,r as N}from"./jsx-runtime.3a1e2061.js";import"./iframe.375110c5.js";const d=a(({href:n,label:o,isExternal:r})=>e("li",{className:"m-list_item",children:c("a",{className:"m-list_link",href:n,children:[o," ",r&&e(u,{name:"external-link"})]})}),"NotificationLink");try{d.displayName="NotificationLink",d.__docgenInfo={description:"",displayName:"NotificationLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isExternal:{defaultValue:null,description:"",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const s=a(({children:n,className:o,headingLevel:r="h4",links:l,message:p,type:t="info",...g})=>{const h=_("m-notification","m-notification__visible",{"m-notification__success":t==="success","m-notification__warning":t==="warning","m-notification__error":t==="error","m-notification__info":t==="info"},o);return c("div",{className:h,"data-testid":"notification",...g,children:[e(u,{...x[t]||{}}),c("div",{className:"m-notification_content",children:[p?e("p",{className:`${r} m-notification_message`,children:p}):null,n?e("p",{className:"m-notification_explanation",children:n}):null,l&&l.length>0?e("ul",{className:"m-list m-list__links",children:l.map(f=>N.exports.createElement(d,{...f,key:f.href}))}):null]})]})},"Notification"),x={error:{name:"error",withBg:!0},info:{name:"information",withBg:!0},loading:{name:"updating",withBg:!1},success:{name:"approved",withBg:!0},warning:{name:"warning",withBg:!0}};try{s.displayName="Notification",s.__docgenInfo={description:`CFPB DS Notification

https://cfpb.github.io/design-system/components/notifications`,displayName:"Notification",props:{type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"loading"'}]}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"ReactNode"}},headingLevel:{defaultValue:{value:"h4"},description:"",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"NotificationLinkProperties[]"}}}}}catch{}const C={title:"Components/Notification",component:s,argTypes:{message:{control:"text"}},parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react';
import { Notification } from './Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    message: { control: 'text' }
  },
  parameters: {
    docs: {
      description: {
        component: \`
### CFPB DS Notification component

Source: https://cfpb.github.io/design-system/components/notifications
\`
      }
    }
  }
};

const Template: ComponentStory<typeof Notification> = args => (
  <Notification {...args} />
);

export const information = Template.bind({});
information.args = { type: 'info', message: 'A Notification' };

export const informationWithExplaination = Template.bind({});
informationWithExplaination.args = {
  ...information.args,
  children: 'You can also add an explanation to the notification.'
};

export const informationWithLinks = Template.bind({});
informationWithLinks.args = {
  ...information.args,
  children: 'This is the explanation of the notification.',
  links: [
    {
      href: '/',
      label: 'This is a link below the explaination'
    },
    {
      href: '/',
      label: 'This is an external link',
      isExternal: true
    }
  ]
};

export const success = Template.bind({});
success.args = { type: 'success', message: '11 results' };

export const warning = Template.bind({});
warning.args = { type: 'warning', message: 'No results found.' };

export const error = Template.bind({});
error.args = { type: 'error', message: 'Page not found.' };

export const loading = Template.bind({});
loading.args = { type: 'loading', message: 'The page is loading\u2026.' };
`,locationsMap:{information:{startLoc:{col:54,line:23},endLoc:{col:1,line:25},startBody:{col:54,line:23},endBody:{col:1,line:25}},"information-with-explaination":{startLoc:{col:54,line:23},endLoc:{col:1,line:25},startBody:{col:54,line:23},endBody:{col:1,line:25}},"information-with-links":{startLoc:{col:54,line:23},endLoc:{col:1,line:25},startBody:{col:54,line:23},endBody:{col:1,line:25}},success:{startLoc:{col:54,line:23},endLoc:{col:1,line:25},startBody:{col:54,line:23},endBody:{col:1,line:25}},warning:{startLoc:{col:54,line:23},endLoc:{col:1,line:25},startBody:{col:54,line:23},endBody:{col:1,line:25}},error:{startLoc:{col:54,line:23},endLoc:{col:1,line:25},startBody:{col:54,line:23},endBody:{col:1,line:25}},loading:{startLoc:{col:54,line:23},endLoc:{col:1,line:25},startBody:{col:54,line:23},endBody:{col:1,line:25}}}},docs:{description:{component:`
### CFPB DS Notification component

Source: https://cfpb.github.io/design-system/components/notifications
`}}}},i=a(n=>e(s,{...n}),"Template"),m=i.bind({});m.args={type:"info",message:"A Notification"};const b=i.bind({});b.args={...m.args,children:"You can also add an explanation to the notification."};const L=i.bind({});L.args={...m.args,children:"This is the explanation of the notification.",links:[{href:"/",label:"This is a link below the explaination"},{href:"/",label:"This is an external link",isExternal:!0}]};const B=i.bind({});B.args={type:"success",message:"11 results"};const v=i.bind({});v.args={type:"warning",message:"No results found."};const w=i.bind({});w.args={type:"error",message:"Page not found."};const T=i.bind({});T.args={type:"loading",message:"The page is loading\u2026."};const V=["information","informationWithExplaination","informationWithLinks","success","warning","error","loading"];export{V as __namedExportsOrder,C as default,w as error,m as information,b as informationWithExplaination,L as informationWithLinks,T as loading,B as success,v as warning};
//# sourceMappingURL=Notification.stories.a8e6f2c4.js.map
