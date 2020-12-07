(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{63:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return i})),o.d(t,"default",(function(){return p}));var n=o(2),a=o(6),s=(o(0),o(76)),r={id:"install",title:"Installation",slug:"/"},l={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Installation",description:"1. Install the shroom package",source:"@site/docs/install.md",slug:"/",permalink:"/shroom/docs/",editUrl:"https://github.com/jankuss/shroom/edit/master/docs/docs/install.md",version:"current",sidebar:"someSidebar",next:{title:"Create a room",permalink:"/shroom/docs/create-room"}},i=[{value:"1. Install the shroom package",id:"1-install-the-shroom-package",children:[]},{value:"2. Install <code>swftools</code> (http://www.swftools.org/)",id:"2-install-swftools-httpwwwswftoolsorg",children:[]},{value:"3. Dump assets into your project",id:"3-dump-assets-into-your-project",children:[]},{value:"4. Create the Shroom instance",id:"4-create-the-shroom-instance",children:[]}],c={rightToc:i};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"1-install-the-shroom-package"},"1. Install the shroom package"),Object(s.b)("p",null,"To install shroom in your project, use the following command."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install @jankuss/shroom pixi.js\n")),Object(s.b)("p",null,"If you are using ",Object(s.b)("inlineCode",{parentName:"p"},"yarn"),", you can use"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add @jankuss/shroom pixi.js\n")),Object(s.b)("h3",{id:"2-install-swftools-httpwwwswftoolsorg"},"2. Install ",Object(s.b)("inlineCode",{parentName:"h3"},"swftools")," (",Object(s.b)("a",Object(n.a)({parentName:"h3"},{href:"http://www.swftools.org/"}),"http://www.swftools.org/"),")"),Object(s.b)("p",null,"For the asset dumping process to work correctly, ",Object(s.b)("inlineCode",{parentName:"p"},"swftools")," needs to be installed in your system.\nDownload ",Object(s.b)("inlineCode",{parentName:"p"},"swftools")," ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.swftools.org/download.html"}),"here")," and install it."),Object(s.b)("p",null,"After installation, add the installation directory of ",Object(s.b)("inlineCode",{parentName:"p"},"swftools")," to your systems ",Object(s.b)("inlineCode",{parentName:"p"},"PATH")," variable.\nIn the end, the commands ",Object(s.b)("inlineCode",{parentName:"p"},"swfdump")," and ",Object(s.b)("inlineCode",{parentName:"p"},"swfextract")," should be callable from the command line."),Object(s.b)("p",null,"If that's the case, you can continue to the next step."),Object(s.b)("h3",{id:"3-dump-assets-into-your-project"},"3. Dump assets into your project"),Object(s.b)("p",null,"Run the following commands to dump the required assets into your project directory. This will take some time.\nThe ",Object(s.b)("inlineCode",{parentName:"p"},"--url")," option specifies the url to the external variables to use. The ",Object(s.b)("inlineCode",{parentName:"p"},"--location")," option specifies the location where the assets should get dumped into.\nYou can adjust both as needed."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install -g @jankuss/shroom\nshroom dump --url https://www.habbo.com/gamedata/external_variables/326b0a1abf9e2571d541ac05e6eb3173b83bddea --location ./public/resources\n")),Object(s.b)("p",null,"You will need to serve the created ",Object(s.b)("inlineCode",{parentName:"p"},"resources")," folder with a http server, so shroom can access the required assets."),Object(s.b)("h3",{id:"4-create-the-shroom-instance"},"4. Create the Shroom instance"),Object(s.b)("p",null,"Lastly, in your code, import and initialize the Shroom instance."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import * as PIXI from "pixi.js";\nimport { Shroom } from "@jankuss/shroom";\n\nconst view = document.querySelector("#root") as HTMLCanvasElement;\nconst application = new PIXI.Application({ view });\n\n// Assuming the resources are available under http://localhost:8080/resources\nconst shroom = Shroom.create({ application, resourcePath: "./resources" });\n')),Object(s.b)("p",null,"Now, you are fully ready to use shroom.\nCheck out the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/shroom/docs/create-room"}),"Guides")," section to learn how to use shroom."),Object(s.b)("p",null,"Also, take a look at the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jankuss/shroom/tree/master/example"}),"example project")," in the shroom repository for a basic project depending on shroom.\nYou can use it as a boilerplate for your own."))}p.isMDXComponent=!0}}]);