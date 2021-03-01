(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{121:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return r})),o.d(n,"metadata",(function(){return c})),o.d(n,"toc",(function(){return i})),o.d(n,"default",(function(){return p}));var t=o(3),a=o(7),s=(o(0),o(133)),r={id:"common-plugins",title:"Common Plugins"},c={unversionedId:"guides/advanced/common-plugins",id:"guides/advanced/common-plugins",isDocsHomePage:!1,title:"Common Plugins",description:"Typegoose supports mongoose plugins. Here's how to use some common plugins:",source:"@site/../docs/guides/advanced/common-plugins.md",slug:"/guides/advanced/common-plugins",permalink:"/typegoose/docs/guides/advanced/common-plugins",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/common-plugins.md",version:"current",sidebar:"guides",previous:{title:"Reference other Classes",permalink:"/typegoose/docs/guides/advanced/reference-other-classes"},next:{title:"Change _id Type",permalink:"/typegoose/docs/guides/advanced/change-id-type"}},i=[{value:"mongoose-autopopulate",id:"mongoose-autopopulate",children:[]},{value:"mongoose-findorcreate",id:"mongoose-findorcreate",children:[]},{value:"mongoose-sequence",id:"mongoose-sequence",children:[]},{value:"@typegoose/auto-increment",id:"typegooseauto-increment",children:[{value:"AutoIncrementSimple",id:"autoincrementsimple",children:[]},{value:"AutoIncrementID",id:"autoincrementid",children:[]}]}],l={toc:i};function p(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},l,o,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Typegoose supports mongoose plugins. Here's how to use some common plugins:"),Object(s.b)("h2",{id:"mongoose-autopopulate"},"mongoose-autopopulate"),Object(s.b)("p",null,"Typegoose has the prop option ",Object(s.b)("inlineCode",{parentName:"p"},"autopopulate")," implemented, but it only has an effect, if ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/mongodb-js/mongoose-autopopulate"}),Object(s.b)("inlineCode",{parentName:"a"},"mongoose-autopopulate"))," is installed and used too."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"import * as mongoose from 'mongoose';\nimport * as autopopulate from 'mongoose-autopopulate';\nimport { plugin, prop, Ref, getModelForClass } from '@typegoose/typegoose';\n\n@plugin(autopopulate as any) // this is a dirty fix, because the types of this plugin dont work\nclass SomeClass {\n  @prop({ autopopulate: true, ref: 'SomeReferencedClass' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n\nclass SomeReferencedClass {}\n\nconst SomeClassModel = getModelForClass(SomeClass);\nconst SomeReferencedClassModel = getModelForClass(SomeReferencedClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: 'guides', useUnifiedTopology: true });\n\n  const reference = await SomeReferencedClassModel.create({});\n  const { _id: id } = await SomeClassModel.create({ populateField: reference } as SomeClass);\n\n  console.log(await SomeClassModel.findById(id).exec()); // output will be populated\n\n  await mongoose.disconnect();\n})();\n")),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"If you have a ",Object(s.b)("inlineCode",{parentName:"p"},"ref")," which refers back to its own class/model, like having a User class with a ",Object(s.b)("inlineCode",{parentName:"p"},"createdBy")," field referring back to User, then you'll need to set the ",Object(s.b)("inlineCode",{parentName:"p"},"maxDepth")," prop of ",Object(s.b)("inlineCode",{parentName:"p"},"autocomplete")," to 1. If you don't do this, Mongoose will do recursive calls to\nthe user collection 10 times, extremely delaying the output of the query. Below is an example of how to set ",Object(s.b)("inlineCode",{parentName:"p"},"maxDepth"),"."))),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),'// the types of "autopopulate" may change depending on the tsconfig option "esModuleInterop"\n@plugin(autopopulate as any) // this is a dirty fix, because the types of this plugin dont work\nclass SomeClass {\n  @prop({ autopopulate: { maxDepth: 1 }, ref: \'SomeReferencedClass\' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n')),Object(s.b)("h2",{id:"mongoose-findorcreate"},"mongoose-findorcreate"),Object(s.b)("p",null,"Typegoose has a default class for ",Object(s.b)("inlineCode",{parentName:"p"},"mongoose-findorcreate")," that has all the types it needs. Here's how to use it:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"import { DocumentType, getModelForClass, plugin, prop, defaultClasses } from '@typegoose/typegoose';\nimport * as mongoose from 'mongoose';\nimport * as findorcreate from 'mongoose-findorcreate';\n\n@plugin(findorcreate)\nclass SomeClass extends defaultClasses.FindOrCreate {\n  @prop()\n  public someField!: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: 'guides' });\n\n  console.log(await SomeClassModel.findOrCreate({ someField: 'Hello' }));\n  console.log(await SomeClassModel.findOrCreate({ someField: 'Hello' })); // both will give the same output\n\n  await mongoose.disconnect();\n})();\n")),Object(s.b)("h2",{id:"mongoose-sequence"},"mongoose-sequence"),Object(s.b)("p",null,"To use ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/ramiel/mongoose-sequence"}),"mongoose-sequence"),", import the plugin and use it like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"import AutoIncrementFactory from 'mongoose-sequence';\n\n// AutoIncrement now is the instance\nconst AutoIncrement = AutoIncrementFactory(mongoose);\n\n@plugin(AutoIncrement, { inc_field: '_id', start_seq: 200 })\nclass SomeClass extends defaultClasses.Base<number> {\n  @prop()\n  public _id: number;\n}\n\n// The Plugin options can be applied too\n\n@plugin<mongoose.SequenceOptions>(AutoIncrement, { inc_field: '_id' }) // Note: \"start_seq\" is not in the \"SequenceOptions\" type\nclass SomeClass extends defaultClasses.Base<number> {\n  @prop()\n  public _id!: number;\n}\n")),Object(s.b)("p",null,"For more details, see ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/ramiel/mongoose-sequence/issues/83"}),"this issue"),"."),Object(s.b)("h2",{id:"typegooseauto-increment"},"@typegoose/auto-increment"),Object(s.b)("p",null,"The Typegoose project provides an ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/typegoose/auto-increment"}),Object(s.b)("inlineCode",{parentName:"a"},"auto-increment")," plugin")," for Mongoose. Here is how to use it:"),Object(s.b)("h3",{id:"autoincrementsimple"},"AutoIncrementSimple"),Object(s.b)("p",null,"Always increments the field on each save"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"@plugin(AutoIncrementSimple, [{ field: 'someIncrementedField' }])\nclass SomeClass {\n  @prop() // does not need to be empty\n  public someIncrementedField: number;\n}\n\nconst SomeModel = getModelForClass(SomeClass);\n\nconst doc = await SomeModel.create({ someIncrementedField: 10 });\n\nawait doc.save(); // someIncrementedField will be 11\n")),Object(s.b)("h3",{id:"autoincrementid"},"AutoIncrementID"),Object(s.b)("p",null,"Only increases the field if the document is ",Object(s.b)("em",{parentName:"p"},"new")," and the counter is stored in a counter-collection (default field: ",Object(s.b)("inlineCode",{parentName:"p"},"_id"),")."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"@plugin(AutoIncrementID, {})\nclass SomeClass {\n  @prop()\n  public _id: number;\n\n  @prop() // does not need to be empty\n  public someIncrementedField: number;\n}\n\nconst SomeModel = getModelForClass(SomeClass);\n\nconst doc = await SomeModel.create({ someIncrementedField: 10 }); // _id will be 1\n")),Object(s.b)("hr",null),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Some or all of the listed plugins might not have a ",Object(s.b)("inlineCode",{parentName:"p"},"@types")," package, so types have to be mostly manually declared."))))}p.isMDXComponent=!0},133:function(e,n,o){"use strict";o.d(n,"a",(function(){return m})),o.d(n,"b",(function(){return b}));var t=o(0),a=o.n(t);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},m=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,s=e.originalType,r=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(o),u=t,b=m["".concat(r,".").concat(u)]||m[u]||d[u]||s;return o?a.a.createElement(b,c(c({ref:n},l),{},{components:o})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=o.length,r=new Array(s);r[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,r[1]=c;for(var l=2;l<s;l++)r[l]=o[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);