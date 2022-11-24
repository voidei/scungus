/* eslint-disable */
//prettier-ignore
module.exports = {
name: "yarn-plugin-manifest",
factory: function (require) {
var plugin=(()=>{var j=Object.create,l=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var O=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var v=n=>l(n,"__esModule",{value:!0});var h=n=>{if(typeof require!="undefined")return require(n);throw new Error('Dynamic require of "'+n+'" is not supported')};var M=(n,e)=>{for(var o in e)l(n,o,{get:e[o],enumerable:!0})},C=(n,e,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of N(e))!S.call(n,s)&&s!=="default"&&l(n,s,{get:()=>e[s],enumerable:!(o=k(e,s))||o.enumerable});return n},w=n=>C(v(l(n!=null?j(O(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);var q={};M(q,{default:()=>$});var p=w(h("@yarnpkg/cli")),f=w(h("@yarnpkg/core")),t=w(h("clipanion"));var i="manifest",y="m";var a=class extends p.BaseCommand{constructor(){super(...arguments);this.fields=t.Option.String("-f,--fields",{required:!1,description:"only show specific fields, separate by comma"});this.json=t.Option.Boolean("--json",{required:!1,description:"show as json"});this.oneline=t.Option.Boolean("--oneline",{required:!1,description:"show in oneline"})}async execute(){let e=await f.Configuration.find(this.context.cwd,this.context.plugins),{project:o,workspace:s}=await f.Project.find(e,this.context.cwd);if(!s)throw new p.WorkspaceRequiredError(o.cwd,this.context.cwd);let m=s.manifest.raw,g=this.fields?this.fields.split(","):Object.keys(m);if(this.json){let c={};g.forEach(u=>{let r=u.trim();c[r]=m[r]});let d=this.oneline?JSON.stringify(c):JSON.stringify(c,null,2);this.context.stdout.write(d+`
`)}else{let d=g.map(u=>{let r=u.trim(),x=m[r];return`${r}: ${x}`}).join(this.oneline?", ":`
`);this.context.stdout.write(d+`
`)}}};a.paths=[[i],[y]],a.usage=t.Command.Usage({description:"Show manifest of workspace",examples:[["show all fields in package.json",`yarn ${i}
    name: yarn-plugins
    version: 1.0.0
    #...other fields`],["show specific fields",`yarn ${i} --fields=name,version
    name: yarn-plugins
    version: 1.0.0`],["show as json",`yarn ${i} --fields=name --json
    {
      "name": "yarn-plugins"
    }`],["show in oneline",`yarn ${i} --fields=name,version --oneline
    name: yarn-plugins, version: 1.0.0`]]});var _={commands:[a]},$=_;return q;})();
return plugin;
}
};
