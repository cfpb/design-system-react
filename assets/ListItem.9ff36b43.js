import{c as m}from"./index.cfa9e344.js";import{j as i,F as u,e as _}from"./jsx-runtime.3c5b5edf.js";function o({children:e,className:n,isHorizontal:s,isLinks:l=!1,isOrdered:t,isSpaced:p,isUnstyled:c}){const a=[n,"m-list"];return s&&a.push("m-list__horizontal"),l&&a.push("m-list__links"),p&&a.push("m-list__spaced"),c&&a.push("m-list__unstyled"),t?i("ol",{className:m(a),children:e}):i("ul",{className:m(a),children:e})}try{o.displayName="List",o.__docgenInfo={description:"",displayName:"List",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isHorizontal:{defaultValue:null,description:"",name:"isHorizontal",required:!1,type:{name:"boolean"}},isLinks:{defaultValue:{value:"false"},description:"",name:"isLinks",required:!1,type:{name:"boolean"}},isOrdered:{defaultValue:null,description:"",name:"isOrdered",required:!1,type:{name:"boolean"}},isSpaced:{defaultValue:null,description:"",name:"isSpaced",required:!1,type:{name:"boolean"}},isUnstyled:{defaultValue:null,description:"",name:"isUnstyled",required:!1,type:{name:"boolean"}}}}}catch{}function r({children:e}){return i("li",{className:"m-list_item",children:e})}function d({children:e,className:n=""}){return i(u,{children:e.map(s=>{var l,t;return i(r,{children:_.cloneElement(s,{className:`${n} ${(t=(l=s.props)==null?void 0:l.className)!=null?t:""}`})},s.key)})})}try{r.displayName="ListItem",r.__docgenInfo={description:"",displayName:"ListItem",props:{}}}catch{}try{d.displayName="ListItemBuilder",d.__docgenInfo={description:`A utility component that wraps each child element in an <li>,
while adding the provided \`className\` prop to the newly wrapped element.

Example:
<ListItemBuilder className='m-list_link'>
  <a className='selected' href='/home' key='home'>Homepage</a>
  <a href='/away' key='away'>Other page</a>
</ListItemBuilder>

Example Output:
<>
  <li class='m-list_item key='home'>
   <a class='m-list_link selected' href='/home'>Homepage</a>
  </li>
  <li class='m-list_item key='away'>
   <a class='m-list_link' href='/away'>Other page</a>
  </li>
</>`,displayName:"ListItemBuilder",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{o as L,d as a,r as b};
//# sourceMappingURL=ListItem.9ff36b43.js.map
