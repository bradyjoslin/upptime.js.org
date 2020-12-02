(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var o=r(2),n=r(6),a=(r(0),r(79)),i={title:"Getting started"},s={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Getting started",description:"To use Upptime as an uptime monitor and status website generator, you start by creating a repository using the template on GitHub.",source:"@site/docs/get-started.md",slug:"/get-started",permalink:"/docs/get-started",editUrl:"https://github.com/upptime/upptime.js.org/blob/master/docs/get-started.md",version:"current",sidebar:"sidebar",previous:{title:"How it works",permalink:"/docs/"},next:{title:"Configuration",permalink:"/docs/configuration"}},c=[{value:"Create a repository from the template",id:"create-a-repository-from-the-template",children:[]},{value:"After creating your repository",id:"after-creating-your-repository",children:[{value:"Enable publishing",id:"enable-publishing",children:[]},{value:"Add repository secrets",id:"add-repository-secrets",children:[]},{value:"Update configuration",id:"update-configuration",children:[]},{value:"Viewing GitHub Actions workflows",id:"viewing-github-actions-workflows",children:[]},{value:"Best practices",id:"best-practices",children:[]}]}],p={rightToc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To use Upptime as an uptime monitor and status website generator, you start by creating a repository using the template on GitHub."),Object(a.b)("h2",{id:"create-a-repository-from-the-template"},"Create a repository from the template"),Object(a.b)("p",null,"You can click on the following link to generate a repository using the template: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/generate"}),Object(a.b)("strong",{parentName:"a"},"Create a new repository"))," from ",Object(a.b)("inlineCode",{parentName:"p"},"upptime/upptime"),". Alternately, you can follow these steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Visit the Upptime repository on GitHub: ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/upptime/upptime"}),"https://github.com/upptime/upptime")),Object(a.b)("li",{parentName:"ol"},'Click on the "Use this template" button on the top-right'),Object(a.b)("li",{parentName:"ol"},'Enter a name for your new repository and check "Include all branches"'),Object(a.b)("li",{parentName:"ol"},'Click on "Create repository from template"')),Object(a.b)("p",null,"For more details on how to create repositories using template, read the article on the GitHub website: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template"}),"Creating a repository from a template"),"."),Object(a.b)("h2",{id:"after-creating-your-repository"},"After creating your repository"),Object(a.b)("p",null,"The following steps apply to your new repository, not the upptime/upptime template repository."),Object(a.b)("h3",{id:"enable-publishing"},"Enable publishing"),Object(a.b)("p",null,"To get a static status website, you have to enable GitHub Pages on your new repository."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to your repository settings page"),Object(a.b)("li",{parentName:"ol"},'Scroll to "GitHub Pages" settings'),Object(a.b)("li",{parentName:"ol"},'Under "Source", change "None" to ',Object(a.b)("inlineCode",{parentName:"li"},"gh-pages"),")"),Object(a.b)("li",{parentName:"ol"},'Click on "Save"')),Object(a.b)("p",null,'After saving, you will see confirmation text "Your site is ready to be published at...". For more information on enabling GitHub Pages, see the article on the GitHub website: ',Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"}),"Configuring a publishing source for your GitHub Pages site"),"."),Object(a.b)("p",null,"If you don't want to have a publicly-available status website, you don't have to enable publishing. If that is the case, you can also choose to keep your repository private. It is ",Object(a.b)("strong",{parentName:"p"},"not")," possible to publish a status website from a private repository without using an API proxy with authentication. See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/issues/54"}),"#54")," and the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://upptime.js.org/docs/configuration#custom-api-base-url"}),"Configuration for ",Object(a.b)("inlineCode",{parentName:"a"},"apiBaseUrl"))," to learn how to set up a status website from your private repository."),Object(a.b)("h3",{id:"add-repository-secrets"},"Add repository secrets"),Object(a.b)("p",null,"All sensitive information required, such as API keys, are provided as environment variables. These are stored as GitHub repository secrets (see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets"}),"Creating and storing encrypted secrets"),")."),Object(a.b)("p",null,"To make commits and publish your website, Upptime requires a personal access token (PAT) with the ",Object(a.b)("inlineCode",{parentName:"p"},"repo")," and ",Object(a.b)("inlineCode",{parentName:"p"},"workflow")," scope, stored as a the repository secret ",Object(a.b)("inlineCode",{parentName:"p"},"GH_PAT"),". You can create a personal access token by following these steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'Click on your profile picture on the top-right corner and select "Settings"'),Object(a.b)("li",{parentName:"ol"},'In the left sidebar, select "Developer settings"'),Object(a.b)("li",{parentName:"ol"},'In the left sidebar, click "Personal access tokens"'),Object(a.b)("li",{parentName:"ol"},'Click "Generate new token"'),Object(a.b)("li",{parentName:"ol"},'Select the "repo" and "workflow" scopes'),Object(a.b)("li",{parentName:"ol"},'Click "Generate token"')),Object(a.b)("p",null,"After generating your token, copy it (you will not see it again). Then, add it as a repository secret:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'In your Upptime repository, select "Settings"'),Object(a.b)("li",{parentName:"ol"},'In the left sidebar, click "Secrets"'),Object(a.b)("li",{parentName:"ol"},'Press the button "Add a new secret"'),Object(a.b)("li",{parentName:"ol"},"Enter the name of the secret as ",Object(a.b)("inlineCode",{parentName:"li"},"GH_PAT")),Object(a.b)("li",{parentName:"ol"},'Paste your personal access token and click "Add secret"')),Object(a.b)("p",null,"For more information on PATs, read article on the GitHub website: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token"}),"Creating a personal access token"),"."),Object(a.b)("h3",{id:"update-configuration"},"Update configuration"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},".upptimerc.yml")," file is used as the central configuration store. In that file, you can specify which endpoints you want to monitory and configure your status website. For more information, visit ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/configuration"}),"Configuration"),"."),Object(a.b)("p",null,"You can start by adding your endpoints under ",Object(a.b)("inlineCode",{parentName:"p"},"sites"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".upptimerc.yml"',title:'".upptimerc.yml"'}),"owner: koj-co # GitHub username\nrepo: upptime # GitHub repository name\nsites: # List of endpoints to track\n  - name: Google\n    url: https://www.google.com\nassignees: # Users to assign downtime issues (optional)\n  - AnandChowdhary\nstatus-website: # Status website (optional)\n  cname: upptime.js.org # Custom domain CNAME\n  name: Upptime # Status website title\n")),Object(a.b)("p",null,"If you're not using a custom domain, you can remove the line starting with ",Object(a.b)("inlineCode",{parentName:"p"},"cname:")," and instead add the GitHub repository name:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'status-website:\n  baseUrl: /repo # where "repo" is your repository name\n  name: Your Status Website\n')),Object(a.b)("p",null,"Then, your status page may be hosted on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://user.github.io/repo/"}),"https://user.github.io/repo/"),", where ",Object(a.b)("inlineCode",{parentName:"p"},"user")," is your GitHub username and ",Object(a.b)("inlineCode",{parentName:"p"},"repo")," is your repository name."),Object(a.b)("h3",{id:"viewing-github-actions-workflows"},"Viewing GitHub Actions workflows"),Object(a.b)("p",null,"After updating the configuration file, Upptime should run workflows using GitHub Actions to update your ",Object(a.b)("inlineCode",{parentName:"p"},"README.md"),' and generate API endpoints and graphs. To view the status, click on the "Actions" tab in your repository. You should see pending or complete workflows. If you don\'t, you can manually trigger the "Setup CI" using the ',Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/triggers"}),"Triggers")," article."),Object(a.b)("p",null,"If you've forked the Upptime repository or have rules to disable Actions by default, you'll have to manually enable GitHub Actions, but this should probably not be your case."),Object(a.b)("h3",{id:"best-practices"},"Best practices"),Object(a.b)("p",null,"Now that you have your Upptime instance fully set up, you should follow these best practices when adding details to outage incidents."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Upptime will automatically open a new issue when an outage occurs"),Object(a.b)("li",{parentName:"ul"},"If you haven't identified the cause of this outage, you can add a comment like: \"",Object(a.b)("strong",{parentName:"li"},"Investigating"),": We're currently investigating the cause of this outage, and we'll update the details here shortly.\""),Object(a.b)("li",{parentName:"ul"},"Then, you can add some comments with the details of the outage, and change the name of the issue with the details of the outage"),Object(a.b)("li",{parentName:"ul"},"The issue will be automatically closed when the site comes back up, so you can add a last comment with a postmortem of the outage")))}l.isMDXComponent=!0},79:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return r?n.a.createElement(d,s(s({ref:t},p),{},{components:r})):n.a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);