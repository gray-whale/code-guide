# 提交信息规范
一个好的提交信息, 会帮助你提高项目的整体质量.

+ why
    - 格式统一的提交信息可以帮助自动化生成changelog
    - 版本库不只是存放代码的仓库, 也记录项目的开发记录. 这些记录应该可以帮助后来者快速地学习和回顾代码. 也应该方便其他协作者review你的代码
+ 原则: 半年后, 你能看懂你的commit做了什么东西
+ 方式: 使用git commit(打开编辑器)而不是git commit -m
+ 必要信息
    - 为什么进行这次提交?
        + 提交改变了什么, 让其他reviewer更容易审核代码和忽略无关的改变
    - 如何解决的问题?
        + 问题是什么导致的？
        + 简短说明使用什么方式, 策略, 修复了问题.
    - 变化可能影响哪些地方
        + 说明变动功能的细节。 一个提交不应该做超过2个功能的变动

## 格式
我们采用angular的提交规范, 在这个规范的基础上支持(可选)emoji进行修饰

```xml
<type>(<scope>): <subject>

<body>

<footer>
```
### header
>如果提交时feature或者fix(已发布的版本), 这些提交信息应该出现在CHANGELOG

+ type: 说明commit的类别. 可以配合emoji使用, 让阅读者更快地区分提交的类型,允许以下类型:
    - ✨feature或feat: 引入新功能
    - 🐛fix: 修复了bug
    - 📝docs: 文档
    - 🎨style: 优化项目结构或者代码格式
    - ♻️refactor: 代码重构. 代码重构不涉及新功能和bug修复. 不应该影响原有功能, 包括对外暴露的接口
    - ✅test: 增加测试
    - ⏫chore: 构建过程, 辅助工具升级. 如升级依赖, 升级构建工具
    - ⚡️perf: 性能优化
    - ⏪ revert: revert之前的commit
        + git revert 命令用于撤销之前的一个提交, 并在为这个撤销操作生成一个提交
    - 🎉 build或release: 构建或发布版本
    - 🔒 safe: 修复安全问题
+ scope: 可选. 说明提交影响的范围. 例如样式, 后端接口, 逻辑层等等
+ Subject: 提交目的的简短描述, 动词开头, 不超过80个字符. 不要为了提交而提交

### body
可选. 对本次提交的详细描述. 如果变动很简单, 可以省略

### footer
可选. 只用于说明不兼容变动(break change)和关闭 Issue(如果使用使用gitlab或github管理bug的话)

### 模板和示例
```js
# 50-character subject line  
#  
# 72-character wrapped longer description. This should answer:  
#  
# * Why was this change necessary?  
# * How does it address the problem?  
# * Are there any side effects?  
#  
# Include a link to the ticket, if any.
```


