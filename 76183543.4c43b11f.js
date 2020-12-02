(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(6),o=(r(0),r(79)),s={title:"How it works",slug:"/"},a={unversionedId:"how-it-works",id:"how-it-works",isDocsHomePage:!1,title:"How it works",description:"Upptime is a free and open-source uptime monitor and status website service. It's very different from other status-page services because it doesn't require a server \u2014 it's all powered by GitHub:",source:"@site/docs/how-it-works.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/upptime/upptime.js.org/blob/master/docs/how-it-works.md",version:"current",sidebar:"sidebar",next:{title:"Getting started",permalink:"/docs/get-started"}},u=[{value:"Concepts",id:"concepts",children:[{value:"GitHub Actions-powered uptime monitor",id:"github-actions-powered-uptime-monitor",children:[]},{value:"GitHub Issues-powered incident reports",id:"github-issues-powered-incident-reports",children:[]},{value:"GitHub Pages-powered status website",id:"github-pages-powered-status-website",children:[]}]}],c={rightToc:u};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Upptime is a free and open-source uptime monitor and status website service. It's very different from other status-page services because it doesn't require a server \u2014 it's all powered by GitHub:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"GitHub Actions is used as an uptime monitor"),Object(o.b)("li",{parentName:"ol"},"GitHub Issues are used for incident reports"),Object(o.b)("li",{parentName:"ol"},"GitHub Pages are used for the status website")),Object(o.b)("h2",{id:"concepts"},"Concepts"),Object(o.b)("h3",{id:"github-actions-powered-uptime-monitor"},"GitHub Actions-powered uptime monitor"),Object(o.b)("p",null,"Using GitHub Actions, users can ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#schedule"}),"schedule")," workflows to automatically run every x-minutes. The shortest interval is 5 minutes. So, every 5 minutes, Upptime visits your websites and makes sure that they're up."),Object(o.b)("p",null,"We also record the response time once per day and commit it to git history. This way, we can graph long-term trends in your websites' response times by going through git commit history. We generate these graphs once every day, also using schedulers."),Object(o.b)("p",null,"You can see an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/issues/15"}),"example issue #15"),"."),Object(o.b)("h3",{id:"github-issues-powered-incident-reports"},"GitHub Issues-powered incident reports"),Object(o.b)("p",null,"When a specified endpoint goes down, Upptime automatically opens a new issue in your GitHub repository. You can use this issue to add more information about the outage, such as whether you are investigating, what caused the downtime, etc. You can also choose to automatically assign certain members from your team to the issue and send notifications to connected services like Slack and Telegram."),Object(o.b)("p",null,"To add information about an incident, you can add comments to the issue. By default, issues will be locked, so only your team members are allowed to comment on them. When your website comes back up, the issue will be automatically closed."),Object(o.b)("p",null,"You can see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/commits/master/history/wikipedia.yml"}),"example commit history"),"."),Object(o.b)("h3",{id:"github-pages-powered-status-website"},"GitHub Pages-powered status website"),Object(o.b)("p",null,"Lastly, you get a beautiful, staticly-generated status website. This website will show users your websites' live status, incident history, and response time graphs. The website is always up-to-date as it uses the GitHub API to fetch data in real-time, and is built using Svelte and Sapper. You can customize the logo, copy, and more to make it your own."),Object(o.b)("p",null,"You can see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://upptime.js.org"}),"example status website"),"."))}p.isMDXComponent=!0},79:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),m=n,d=l["".concat(s,".").concat(m)]||l[m]||b[m]||o;return r?i.a.createElement(d,a(a({ref:t},c),{},{components:r})):i.a.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);