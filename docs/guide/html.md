# HTML规范

## HTML类型 
推荐使用 HTML5 的文档类型申明： 

（建议使用 text/html 格式的 HTML。避免使用 XHTML。XHTML 以及它的属性，比如 application/xhtml+xml 在浏览器中的应用支持与优化空间都十分有限）。  

* 规定字符编码 
* IE 兼容模式 
* 规定字符编码 
* doctype 大写

正例：

```html
<!DOCTYPE html> 
<html> 
    <head> 
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" /> 
        <meta charset="UTF-8" /> 
        <title>Page title</title> 
    </head> 
    <body> 
        <img src="images/company-logo.png" alt="Company"> 
    </body> 
</html>
```

## 缩进

缩进使用 2 个空格（一个 tab）； 嵌套的节点应该缩进。

## 分块注释

在每一个块状元素，列表元素和表格元素后，加上一对 HTML 注释。

## 语义化标签
HTML5 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 div 或者 p 标 签。

正例

```html
<header></header> 
<footer></footer> 
```

反例

```html
<div> 
    <p></p> 
</div>
```

## 引号

使用双引号(" ") 而不是单引号(’ ') 。 

正例：

```html
<div class=”box”></div>
```

反例：

```html
<div class=’box’></div>
```



