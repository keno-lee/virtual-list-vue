import{p as ee,a as K,b as U,O as fe}from"./ObserverItem.6qwwCos6.js";import{h as E,a7 as te,a1 as ae,j as ce,a9 as de,G as ue,y as ie,d as ye,a6 as m}from"./framework.lQqlyL6x.js";const Se={fixed:!1,buffer:0,bufferTop:0,bufferBottom:0,scrollDistance:0,horizontal:!1,start:0,offset:0,listStyle:"",listClass:"",itemStyle:"",itemClass:"",headerClass:"",headerStyle:"",footerClass:"",footerStyle:"",stickyHeaderClass:"",stickyHeaderStyle:"",stickyFooterClass:"",stickyFooterStyle:""};function he(C,c){const e=new Proxy(C,{get(i,l){return Reflect.get(i,l)??Reflect.get(Se,l)}}),d=E(null),p=E(null),k=E(null),v=E(null),w=E(null),B=E(null),b=new Map,_=E(0);let T="backward",H=!1,I=!1,L=!1;const r=te({clientSize:0,headerSize:0,footerSize:0,stickyHeaderSize:0,stickyFooterSize:0}),t=te({views:0,offset:0,listTotalSize:0,virtualSize:0,inViewBegin:0,inViewEnd:0,renderBegin:0,renderEnd:0,bufferTop:0,bufferBottom:0});function $(){const i=e.horizontal?"scrollLeft":"scrollTop";return d.value?d.value[i]:0}function j(){return r.headerSize+r.footerSize+r.stickyHeaderSize+r.stickyFooterSize}function A(){return t.listTotalSize+r.headerSize+r.footerSize+r.stickyHeaderSize+r.stickyFooterSize}function y(i){return e.fixed?e.minSize:b.get(String(i))??e.minSize}function P(i,l){b.set(String(i),l)}function q(i){b.delete(String(i))}function x(i){var o,u;if(e.fixed)return{top:e.minSize*i,current:e.minSize,bottom:e.minSize*(i+1)};const{itemKey:l}=e;let n=r.headerSize;for(let f=0;f<=i-1;f+=1){const z=y((o=e.list[f])==null?void 0:o[l]);n+=z}const s=y((u=e.list[i])==null?void 0:u[l]);return{top:n,current:s,bottom:n+s}}function S(i){L=!0;const l=e.horizontal?"scrollLeft":"scrollTop";d.value&&(d.value[l]=i)}async function R(i){if(console.log("scrollToIndex",i),i<0)return;if(i>=e.list.length-1){M();return}let{top:l}=x(i);const n=async()=>{S(l),setTimeout(()=>{const{top:s}=x(i);l!==s&&(l=s,n())},3)};n()}async function G(i){var f;const{top:l,bottom:n}=x(i),s=$(),o=$()+r.clientSize,u=y((f=e.list[i])==null?void 0:f[e.itemKey]);if(l<s&&s<n&&u<r.clientSize){S(l);return}if(l+r.stickyHeaderSize<o&&o<n+r.stickyHeaderSize&&u<r.clientSize){S(n-r.clientSize+r.stickyHeaderSize);return}if(l+r.stickyHeaderSize>=o){R(i);return}if(n<=s){R(i);return}}async function N(){S(0),setTimeout(()=>{var l;const i=e.horizontal?"scrollLeft":"scrollTop";((l=d==null?void 0:d.value)==null?void 0:l[i])!==0&&N()},3)}async function M(){S(A()),setTimeout(()=>{Math.abs(Math.round(t.offset+r.clientSize)-Math.round(A()))>2&&M()},0)}function h(i){t.inViewBegin=i,t.inViewEnd=Math.min(i+t.views,e.list.length-1)}function V(){var z,F;const{views:i,offset:l,inViewBegin:n}=t,{itemKey:s}=e,o=l-r.headerSize;let u=n,f=ne();if(o<0){h(0);return}if(T==="forward"){if(o>=f)return;for(let g=u-1;g>=0;g-=1){const D=y((z=e.list[g])==null?void 0:z[s]);if(f-=D,f<=o&&o<f+D){u=g;break}}H=!0}if(T==="backward"){if(o<=f)return;for(let g=u;g<=e.list.length-1;g+=1){const D=y((F=e.list[g])==null?void 0:F[s]);if(f<=o&&o<f+D){u=g;break}f+=D}H=!1}u!==t.inViewBegin&&h(u)}function Q(i){var n,s,o;(n=c==null?void 0:c.scroll)==null||n.call(c,i);const l=$();l!==t.offset&&(T=l<t.offset?"forward":"backward",t.offset=l,V(),T==="forward"&&t.offset-e.scrollDistance<=0&&(console.log("[VirtList] 到达顶部"),(s=c==null?void 0:c.toTop)==null||s.call(c,e.list[0])),T==="backward"&&t.offset+e.scrollDistance>=t.listTotalSize+j()-r.clientSize&&(console.log("[VirtList] 到达底部"),(o=c==null?void 0:c.toBottom)==null||o.call(c,e.list[e.list.length-1])))}function le(){const i=Math.ceil(r.clientSize/e.minSize)+1;t.views=i}function oe(){le(),h(t.inViewBegin)}function W(){var n;if(e.fixed){t.listTotalSize=e.minSize*e.list.length;return}const{itemKey:i}=e;let l=0;for(let s=0;s<=e.list.length-1;s+=1)l+=y((n=e.list[s])==null?void 0:n[i]);t.listTotalSize=l}function X(){console.log("[VirtList] reset"),t.offset=0,t.listTotalSize=0,t.virtualSize=0,t.inViewBegin=0,t.inViewEnd=0,t.renderBegin=0,t.renderEnd=0,b.clear()}function se(i){W();let l=0;i.forEach(n=>{l+=y(n[e.itemKey])}),Z(),S(t.offset-l),V()}function re(i){W();let l=0;i.forEach(n=>{l+=y(n[e.itemKey])}),Z(),S(t.offset+l),I=!0,L=!1,V()}function Y(){_.value+=1}let a;typeof ResizeObserver<"u"&&(a=new ResizeObserver(i=>{var n;let l=0;for(const s of i){const o=s.target.dataset.id;if(o){const u=y(o);let f=0;if(s.borderBoxSize){const z=Array.isArray(s.contentBoxSize)?s.contentBoxSize[0]:s.contentBoxSize;f=e.horizontal?z.inlineSize:z.blockSize}else f=e.horizontal?s.contentRect.width:s.contentRect.height;o==="client"?(r.clientSize=f,oe()):o==="header"?r.headerSize=f:o==="footer"?r.footerSize=f:o==="stickyHeader"?r.stickyHeaderSize=f:o==="stickyFooter"?r.stickyFooterSize=f:u!==f&&(P(o,f),l+=f-u,(n=c==null?void 0:c.itemResize)==null||n.call(c,o,f))}}t.listTotalSize+=l,(H||I)&&l!==0&&!L&&(H=!1,I=!1,S(t.offset+l)),L=!1}));const Z=()=>{var n;let i=0;const l=t.renderBegin;for(let s=0;s<l;s++)i+=y((n=e.list[s])==null?void 0:n[e.itemKey]);t.virtualSize=i};ae(()=>{e.bufferTop?t.bufferTop=e.bufferTop:t.bufferTop=e.buffer,e.bufferBottom?t.bufferBottom=e.bufferBottom:t.bufferBottom=e.buffer}),ce(()=>{d.value&&(d.value.addEventListener("scroll",Q),a==null||a.observe(d.value)),w.value&&(a==null||a.observe(w.value)),B.value&&(a==null||a.observe(B.value)),k.value&&(a==null||a.observe(k.value)),v.value&&(a==null||a.observe(v.value)),e.start?R(e.start):e.offset&&S(e.offset)}),de(()=>{d.value&&(d.value.removeEventListener("scroll",Q),a==null||a.unobserve(d.value),r.clientSize=0),w.value&&(a==null||a.unobserve(w.value),r.stickyHeaderSize=0),B.value&&(a==null||a.unobserve(B.value),r.stickyFooterSize=0),k.value&&(a==null||a.unobserve(k.value),r.headerSize=0),v.value&&(a==null||a.unobserve(v.value),r.footerSize=0)});function ne(){return t.virtualSize+J(t.renderBegin,t.inViewBegin)}function J(i,l){var u;const n=Math.min(i,l),s=Math.max(i,l);let o=0;for(let f=n;f<s;f+=1)o+=y((u=e.list[f])==null?void 0:u[e.itemKey]);return o}const O=ue([]);return ie(()=>[t.inViewBegin,t.inViewEnd,_.value],(i,l)=>{if(i&&l){const[n]=i,s=t.renderBegin;let o=n,u=t.inViewEnd;if(o=Math.max(0,o-t.bufferTop),u=Math.min(u+t.bufferBottom,e.list.length-1),e!=null&&e.renderControl){const{begin:f,end:z}=e.renderControl(n,t.inViewEnd);o=f,u=z}t.renderBegin=o,t.renderEnd=u,o>s?t.virtualSize+=J(o,s):t.virtualSize-=J(o,s),O.value=e.list.slice(t.renderBegin,t.renderEnd+1)}},{immediate:!0}),ie(()=>e.list.length,()=>{if(e.list.length<=0){X();return}W(),h(t.inViewBegin),Y()},{immediate:!0}),{props:e,renderList:O,clientRefEl:d,listRefEl:p,headerRefEl:k,footerRefEl:v,stickyHeaderRefEl:w,stickyFooterRefEl:B,reactiveData:t,slotSize:r,sizesMap:b,resizeObserver:a,getOffset:$,reset:X,scrollToIndex:R,scrollIntoView:G,scrollToTop:N,scrollToBottom:M,scrollToOffset:S,getItemSize:y,deleteItemSize:q,deletedList2Top:se,addedList2Top:re,getItemPosByIndex:x,forceUpdate:Y}}const pe=ye({name:"VirtList",props:{list:{type:Array,default:()=>[]},itemKey:{type:[String,Number],required:!0},minSize:{type:Number,default:20,required:!0},renderControl:{type:Function,default:void 0},fixed:{type:Boolean,default:!1},buffer:{type:Number,default:0},bufferTop:{type:Number,default:0},bufferBottom:{type:Number,default:0},scrollDistance:{type:Number,default:0},horizontal:{type:Boolean,default:!1},start:{type:Number,default:0},offset:{type:Number,default:0},listStyle:{type:String,default:""},listClass:{type:String,default:""},itemStyle:{type:String,default:""},itemClass:{type:String,default:""},headerClass:{type:String,default:""},headerStyle:{type:String,default:""},footerClass:{type:String,default:""},footerStyle:{type:String,default:""},stickyHeaderClass:{type:String,default:""},stickyHeaderStyle:{type:String,default:""},stickyFooterClass:{type:String,default:""},stickyFooterStyle:{type:String,default:""}},setup(C,c){return he(C,{scroll:d=>{c.emit("scroll",d)},toTop:d=>{c.emit("toTop",d)},toBottom:d=>{c.emit("toBottom",d)},itemResize:(d,p)=>{c.emit("itemResize",d,p)}})},render(){const{renderList:C,reactiveData:c,resizeObserver:e}=this,{itemKey:d,horizontal:p,listStyle:k,listClass:v,itemStyle:w,itemClass:B,headerClass:b,headerStyle:_,footerClass:T,footerStyle:H,stickyHeaderClass:I,stickyHeaderStyle:L,stickyFooterClass:r,stickyFooterStyle:t}=this.props,$=()=>this.$slots.stickyHeader?m("div",K({key:"slot-sticky-header",class:I,style:`position: sticky; z-index: 10; ${p?"left: 0":"top: 0;"} ${L}`,ref:"stickyHeaderRefEl"},{"data-id":"stickyHeader"}),[U(this.$slots.stickyHeader)]):null,j=()=>this.$slots.stickyFooter?m("div",K({key:"slot-sticky-footer",class:r,style:`position: sticky; z-index: 10; ${p?"right: 0":"bottom: 0;"} ${t}`,ref:"stickyFooterRefEl"},{"data-id":"stickyFooter"}),[U(this.$slots.stickyFooter)]):null,A=()=>this.$slots.header?m("div",K({key:"slot-header",class:b,style:_,ref:"headerRefEl"},{"data-id":"header"}),[U(this.$slots.header)]):null,y=()=>this.$slots.footer?m("div",K({key:"slot-footer",class:T,style:H,ref:"footerRefEl"},{"data-id":"footer"}),[U(this.$slots.footer)]):null,{listTotalSize:P,virtualSize:q,renderBegin:x}=c,S=()=>{var N,M;const R=[];for(let h=0;h<C.length;h+=1){const V=C[h];R.push(m(fe,K({key:V[d],class:B,style:w},{id:V[d],resizeObserver:e}),ee([(M=(N=this.$slots).default)==null?void 0:M.call(N,{itemData:V,index:x+h})])))}const G=p?`will-change: width; min-width: ${P}px; display: flex; ${k}`:`will-change: height; min-height: ${P}px; ${k}`;return m("div",{ref:"listRefEl",class:v,style:G},[m("div",{style:p?`width: ${q}px; will-change: width;`:`height: ${q}px; will-change: height;`}),R])};return m("div",K({ref:"clientRefEl",class:"virt-list__client",style:"width: 100%; height: 100%; overflow: overlay;"},{"data-id":"client"}),ee([$(),A(),S(),y(),j()]))}});export{pe as V,he as u};
