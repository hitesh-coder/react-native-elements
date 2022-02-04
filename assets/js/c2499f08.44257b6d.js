"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9765],{58215:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),l=a(67294),r=a(72389),o=a(29548),i=a(86010);const c="tabItem_LplD";function k(e){var t,a,r,k=e.lazy,u=e.block,p=e.defaultValue,d=e.values,h=e.groupId,m=e.className,s=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=d?d:s.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=s.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=s[0])?void 0:r.props.value;if(null!==g&&!N.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,o.UB)(),v=f.tabGroupChoices,y=f.setTabGroupChoices,D=(0,l.useState)(g),x=D[0],C=D[1],A=[],B=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var T=v[h];null!=T&&T!==x&&N.some((function(e){return e.value===T}))&&C(T)}var w=function(e){var t=e.currentTarget,a=A.indexOf(t),n=N[a].value;n!==x&&(B(t),C(n),null!=h&&y(h,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=A.indexOf(e.currentTarget)+1;a=A[n]||A[0];break;case"ArrowLeft":var l=A.indexOf(e.currentTarget)-1;a=A[l]||A[A.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},m)},N.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return A.push(e)},onKeyDown:I,onFocus:w,onClick:w},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),k?(0,l.cloneElement)(s.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},s.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,r.Z)();return l.createElement(k,(0,n.Z)({key:String(t)},e))}},98938:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>c,contentTitle:()=>k,metadata:()=>u,toc:()=>p,default:()=>h});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=a(22325),i=(a(34738),a(9877),a(58215),["components"]),c={id:"checkbox",title:"CheckBox",slug:"/checkbox"},k=void 0,u={unversionedId:"main/checkbox",id:"main/checkbox",title:"CheckBox",description:"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.",source:"@site/docs/main/CheckBox.mdx",sourceDirName:"main",slug:"/checkbox",permalink:"/docs/next/checkbox",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/CheckBox.mdx",tags:[],version:"current",frontMatter:{id:"checkbox",title:"CheckBox",slug:"/checkbox"},sidebar:"docs",previous:{title:"Card",permalink:"/docs/next/card"},next:{title:"Chip",permalink:"/docs/next/chip"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"CheckBox",id:"checkbox",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"CheckBox",id:"checkbox-1",children:[{value:"Component",id:"component",children:[],level:4},{value:"center",id:"center",children:[],level:4},{value:"checked",id:"checked",children:[],level:4},{value:"checkedColor",id:"checkedcolor",children:[],level:4},{value:"checkedIcon",id:"checkedicon",children:[],level:4},{value:"checkedTitle",id:"checkedtitle",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"fontFamily",id:"fontfamily",children:[],level:4},{value:"iconRight",id:"iconright",children:[],level:4},{value:"iconType",id:"icontype",children:[],level:4},{value:"onIconPress",id:"oniconpress",children:[],level:4},{value:"onLongIconPress",id:"onlongiconpress",children:[],level:4},{value:"right",id:"right",children:[],level:4},{value:"size",id:"size",children:[],level:4},{value:"textStyle",id:"textstyle",children:[],level:4},{value:"title",id:"title",children:[],level:4},{value:"titleProps",id:"titleprops",children:[],level:4},{value:"uncheckedColor",id:"uncheckedcolor",children:[],level:4},{value:"uncheckedIcon",id:"uncheckedicon",children:[],level:4},{value:"wrapperStyle",id:"wrapperstyle",children:[],level:4}],level:3}],level:2}],d={toc:p};function h(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off."),(0,r.kt)("p",null,"It provides a clear visual of either a true or false choice."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"checkbox"},"CheckBox"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#component"},"Component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#center"},"center")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checked"},"checked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkedcolor"},"checkedColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkedicon"},"checkedIcon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkedtitle"},"checkedTitle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fontfamily"},"fontFamily")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iconright"},"iconRight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#icontype"},"iconType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#oniconpress"},"onIconPress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onlongiconpress"},"onLongIconPress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#right"},"right")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#size"},"size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#textstyle"},"textStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#title"},"title")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#titleprops"},"titleProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#uncheckedcolor"},"uncheckedColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#uncheckedicon"},"uncheckedIcon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#wrapperstyle"},"wrapperStyle"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"checkbox-1"},"CheckBox"),(0,r.kt)("h4",{id:"component"},"Component"),(0,r.kt)("p",null,"Specify React Native component for main button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React Component"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"center"},"center"),(0,r.kt)("p",null,"Aligns checkbox to center."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"checked"},"checked"),(0,r.kt)("p",null,"Flag for checking the icon."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"checkedcolor"},"checkedColor"),(0,r.kt)("p",null,"Default checked color."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Color(Primary)")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"checkedicon"},"checkedIcon"),(0,r.kt)("p",null,"Default checked icon (",(0,r.kt)("a",{parentName:"p",href:"http://fontawesome.io/icons/"},"Font Awesome Icon"),")."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"checkedtitle"},"checkedTitle"),(0,r.kt)("p",null,"Specify a custom checked message."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Style of main container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"fontfamily"},"fontFamily"),(0,r.kt)("p",null,"Specify different font family."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"iconright"},"iconRight"),(0,r.kt)("p",null,"Moves icon to right of text."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"icontype"},"iconType"),(0,r.kt)("p",null,"Type of icon set. ",(0,r.kt)("a",{parentName:"p",href:"icon#available-icon-sets"},"Supported sets here"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"oniconpress"},"onIconPress"),(0,r.kt)("p",null,"onPress function for checkbox."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onlongiconpress"},"onLongIconPress"),(0,r.kt)("p",null,"onLongPress function for checkbox."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"right"},"right"),(0,r.kt)("p",null,"Aligns checkbox to right."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"size"},"size"),(0,r.kt)("p",null,"Size of the checkbox."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"textstyle"},"textStyle"),(0,r.kt)("p",null,"Style of text."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"title"},"title"),(0,r.kt)("p",null,"Title of checkbox."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"titleprops"},"titleProps"),(0,r.kt)("p",null,"Additional props for the title Text component."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextProps"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"uncheckedcolor"},"uncheckedColor"),(0,r.kt)("p",null,"Default unchecked color."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"uncheckedicon"},"uncheckedIcon"),(0,r.kt)("p",null,"Default checked icon (",(0,r.kt)("a",{parentName:"p",href:"http://fontawesome.io/icons/"},"Font Awesome Icon"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"wrapperstyle"},"wrapperStyle"),(0,r.kt)("p",null,"Style for the wrapper of checkbox."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}h.isMDXComponent=!0},22325:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>c,contentTitle:()=>k,metadata:()=>u,toc:()=>p,default:()=>h});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=a(85798),i=["components"],c={},k=void 0,u={unversionedId:"main/usage/CheckBox/CheckBox",id:"main/usage/CheckBox/CheckBox",title:"CheckBox",description:"",source:"@site/docs/main/usage/CheckBox/CheckBox.mdx",sourceDirName:"main/usage/CheckBox",slug:"/main/usage/CheckBox/",permalink:"/docs/next/main/usage/CheckBox/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/CheckBox/CheckBox.mdx",tags:[],version:"current",frontMatter:{}},p=[],d={toc:p};function h(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.default,{mdxType:"Snack"}))}h.isMDXComponent=!0},85798:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>k,toc:()=>u,default:()=>d});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),o=["components"],i={},c=void 0,k={unversionedId:"main/usage/CheckBox/snack/index",id:"main/usage/CheckBox/snack/index",title:"index",description:"",source:"@site/docs/main/usage/CheckBox/snack/index.md",sourceDirName:"main/usage/CheckBox/snack",slug:"/main/usage/CheckBox/snack/",permalink:"/docs/next/main/usage/CheckBox/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/CheckBox/snack/index.md",tags:[],version:"current",frontMatter:{}},u=[],p={toc:u};function d(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE CheckBox","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20CheckBox%2C%20Icon%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20CheckboxComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20CheckboxComponent%3A%20React.FunctionComponent%3CCheckboxComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bcheck1%2C%20setCheck1%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5Bcheck2%2C%20setCheck2%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5Bcheck3%2C%20setCheck3%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5Bcheck4%2C%20setCheck4%5D%20%3D%20useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20center%0A%20%20%20%20%20%20%20%20title%3D%22Click%20Here%22%0A%20%20%20%20%20%20%20%20checked%3D%7Bcheck1%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck1(!check1)%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20center%0A%20%20%20%20%20%20%20%20title%3D%22Click%20Here%22%0A%20%20%20%20%20%20%20%20checkedIcon%3D%22dot-circle-o%22%0A%20%20%20%20%20%20%20%20uncheckedIcon%3D%22circle-o%22%0A%20%20%20%20%20%20%20%20checked%3D%7Bcheck2%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck2(!check2)%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20center%0A%20%20%20%20%20%20%20%20title%3D%7B%60Click%20Here%20to%20%24%7Bcheck3%20%3F%20'Remove'%20%3A%20'Add'%7D%20This%20Item%60%7D%0A%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20iconType%3D%22material%22%0A%20%20%20%20%20%20%20%20checkedIcon%3D%22clear%22%0A%20%20%20%20%20%20%20%20uncheckedIcon%3D%22add%22%0A%20%20%20%20%20%20%20%20checkedColor%3D%22red%22%0A%20%20%20%20%20%20%20%20checked%3D%7Bcheck3%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck3(!check3)%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20center%0A%20%20%20%20%20%20%20%20checkedIcon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22radio-button-checked%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22material%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20uncheckedIcon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22radio-button-unchecked%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22material%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22grey%22%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20checked%3D%7Bcheck4%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck4(!check4)%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20CheckboxComponent%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);