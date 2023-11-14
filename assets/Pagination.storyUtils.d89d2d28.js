const N=n=>[...Array.from({length:n}).keys()].map(t=>[`A${t+1}`,`B${t+1}`]),c=n=>{const t="____PLACEHOLDER____",r=[];let s=JSON.stringify(n,(o,e)=>typeof e=="function"?(r.push(e),t):e,2);return s=s.replaceAll(new RegExp(`"${t}"`,"g"),()=>r.shift()),s};export{N as g,c as s};
//# sourceMappingURL=Pagination.storyUtils.d89d2d28.js.map
