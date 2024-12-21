import{_ as e,c as t,a2 as s,o as n}from"./chunks/framework.qADgyIdF.js";const m=JSON.parse('{"title":"命名规则","description":"","frontmatter":{},"headers":[],"relativePath":"guide/naming-rules.md","filePath":"guide/naming-rules.md","lastUpdated":1698596721000}'),o={name:"guide/naming-rules.md"};function r(p,a,i,l,c,d){return n(),t("div",null,a[0]||(a[0]=[s('<h1 id="命名规则" tabindex="-1">命名规则 <a class="header-anchor" href="#命名规则" aria-label="Permalink to &quot;命名规则&quot;">​</a></h1><h2 id="项目命名" tabindex="-1">项目命名 <a class="header-anchor" href="#项目命名" aria-label="Permalink to &quot;项目命名&quot;">​</a></h2><p>全部采用小写方式，以中线分隔。</p><p>正例：mall-management-system</p><p>反例：mall_management-system / mallManagementSystem</p><h2 id="目录命名" tabindex="-1">目录命名 <a class="header-anchor" href="#目录命名" aria-label="Permalink to &quot;目录命名&quot;">​</a></h2><p>全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数。</p><p>正例： scripts / styles / components / images / utils / layouts / demo-styles / demo-scripts / img / doc</p><p>反例： script / style / demo_scripts / demoStyles / imgs / docs</p><p>【特殊】VUE 的项目中的 components 中的组件目录，使用 kebab-case 命名。</p><p>正例： head-search / page-loading / authorized / notice-icon</p><p>反例： HeadSearch / PageLoading</p><p>【特殊】VUE 的项目中的除 components 组件目录外的所有目录也使用 kebab-case 命名。</p><p>正例： page-one / shopping-car / user-management</p><p>反例： ShoppingCar / UserManagement</p><h2 id="基于react开发-组件文件名-使用大驼峰方式命名" tabindex="-1">基于React开发，组件文件名，使用大驼峰方式命名 <a class="header-anchor" href="#基于react开发-组件文件名-使用大驼峰方式命名" aria-label="Permalink to &quot;基于React开发，组件文件名，使用大驼峰方式命名&quot;">​</a></h2><p>例： AccuntModal</p><h2 id="js文件命名" tabindex="-1">JS文件命名 <a class="header-anchor" href="#js文件命名" aria-label="Permalink to &quot;JS文件命名&quot;">​</a></h2><p>参照项目命名规则。</p><p>例：account-model.js</p><h2 id="css-scss文件命名" tabindex="-1">CSS, SCSS文件命名 <a class="header-anchor" href="#css-scss文件命名" aria-label="Permalink to &quot;CSS, SCSS文件命名&quot;">​</a></h2><p>参照项目命名规则。</p><p>例：retina-sprites.scss</p><h2 id="html文件命名" tabindex="-1">HTML文件命名 <a class="header-anchor" href="#html文件命名" aria-label="Permalink to &quot;HTML文件命名&quot;">​</a></h2><p>参照项目命名规则。</p><p>例：error-report.html</p><h2 id="png图片命名" tabindex="-1">PNG图片命名 <a class="header-anchor" href="#png图片命名" aria-label="Permalink to &quot;PNG图片命名&quot;">​</a></h2><p>参照项目命名规则。</p><p>例：company-logo.png</p><h2 id="命名严谨性" tabindex="-1">命名严谨性 <a class="header-anchor" href="#命名严谨性" aria-label="Permalink to &quot;命名严谨性&quot;">​</a></h2><p>代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。 说明：正确的 英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用</p><p>正例：henan / luoyang / rmb 等国际通用的名称，可视同英文</p><p>反例：DaZhePromotion [打折] / getPingfenByName() [评分] / int 某变量 = 3</p><p>杜绝完全不规范的缩写，避免望文不知义：</p><p>反例：AbstractClass “缩写”命名成 AbsClass；condition “缩写”命名成 condi，此类随意缩写严重 降低了代码的可阅读性。</p>',35)]))}const u=e(o,[["render",r]]);export{m as __pageData,u as default};
