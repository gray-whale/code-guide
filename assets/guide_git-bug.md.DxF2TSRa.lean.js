import{_ as e,c as a,a2 as i,o as l}from"./chunks/framework.qADgyIdF.js";const p=JSON.parse('{"title":"Bug处理规则","description":"","frontmatter":{},"headers":[],"relativePath":"guide/git-bug.md","filePath":"guide/git-bug.md","lastUpdated":1700039457000}'),u={name:"guide/git-bug.md"};function o(r,t,s,d,n,g){return l(),a("div",null,t[0]||(t[0]=[i('<h1 id="bug处理规则" tabindex="-1">Bug处理规则 <a class="header-anchor" href="#bug处理规则" aria-label="Permalink to &quot;Bug处理规则&quot;">​</a></h1><p>对于测试，目前会经历两个阶段</p><ul><li>冒烟测试：在对测试正式发版之前会要求对代码进行自测，及冒烟测试。</li><li>正式测试阶段：正式测试阶段测试人员会在RDMS进行bug提交和管理，对BUG的处理规则如下： <ul><li>[解决待关闭]: 修改了程序代码, 问题解决;</li><li>[不做处理]: 没有修改程序代码, 是由于其他原因(需求变更等), 而解决的问题;</li><li>[退回]: 无规律或只出现一次的BUG, 研发没找到原因, 加上必要排查日志后, 可退回给测试; 复现后重新打开</li><li>[正在处理]: 已大致定位原因, 需要较多时间处理的BUG, 可置为&quot;正在处理&quot;</li></ul></li></ul>',3)]))}const m=e(u,[["render",o]]);export{p as __pageData,m as default};
