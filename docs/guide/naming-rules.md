# 命名规则

## 项目命名
全部采用小写方式，以中线分隔。 

正例：mall-management-system 

反例：mall_management-system / mallManagementSystem

## 目录命名
全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数。 

正例： scripts / styles / components / images / utils / layouts / demo-styles / demo-scripts / img / doc 

反例： script / style / demo_scripts / demoStyles / imgs / docs 

【特殊】VUE 的项目中的 components 中的组件目录，使用 kebab-case 命名。 

正例： head-search / page-loading / authorized / notice-icon 

反例： HeadSearch / PageLoading 

【特殊】VUE 的项目中的除 components 组件目录外的所有目录也使用 kebab-case 命名。

正例： page-one / shopping-car / user-management 

反例： ShoppingCar / UserManagement

## 基于React开发，组件文件名，使用大驼峰方式命名
例： AccuntModal

## JS文件命名
参照项目命名规则。

例：account-model.js

## CSS, SCSS文件命名
参照项目命名规则。

例：retina-sprites.scss

## HTML文件命名
参照项目命名规则。

例：error-report.html

## PNG图片命名
参照项目命名规则。

例：company-logo.png

## 命名严谨性
代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。 说明：正确的 英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用 

正例：henan / luoyang / rmb 等国际通用的名称，可视同英文 

反例：DaZhePromotion [打折] / getPingfenByName() [评分] / int 某变量 = 3 

杜绝完全不规范的缩写，避免望文不知义： 

反例：AbstractClass “缩写”命名成 AbsClass；condition “缩写”命名成 condi，此类随意缩写严重 降低了代码的可阅读性。