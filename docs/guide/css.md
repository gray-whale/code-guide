# CSS规范

## 命名 
* 类名使用小写字母，以中划线分隔 
* id 采用驼峰式命名 
* scss 中的变量、函数、混合、placeholder 采用驼峰式命名

ID 和 class 的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和 晦涩难懂的名称。

不推荐： 

```css
.fw-800 { 
    font-weight: 800; 
}

.red { 
    color: red; 
}
```

推荐: 

```css
.heavy { 
    font-weight: 800; 
}
.important { 
    color: red; 
}
```

## 选择器
1. css 选择器中避免使用标签名

从结构、表现、行为分离的原则来看，应该尽量避免 css 中出现 HTML 标签，并且在 css 选择 器中出现标签名会存在潜在的问题。

2. 使用直接子选择器 

很多前端开发人员写选择器链的时候不使用 直接子选择器（注：直接子选择器和后代选择器的 区别）。有时，这可能会导致疼痛的设计问题并且有时候可能会很耗性能。然而，在任何情况下， 这是一个非常不好的做法。如果你不写很通用的，需要匹配到 DOM 末端的选择器， 你应该总是考虑直接子选择器

不推荐: 

```css
.content .title { 
    font-size: 2rem; 
}
```

推荐: 

```css
.content > .title { 
    font-size: 2rem; 
}
```

3. 尽量使用缩写属性

不推荐： 

```css
border-top-style: none; 
font-family: palatino, georgia, serif; 
font-size: 100%; 
line-height: 1.6; 
padding-bottom: 2em; 
padding-left: 1em; 
padding-right: 1em; 
padding-top: 0;

```

推荐： 

```css
border-top: 0; 
font: 100%/1.6 palatino, georgia, serif; 
padding: 0 1em 2em;
```

4. 每个选择器及属性独占一行
不推荐： 

```css
button { 
    width: 100px; 
    height: 50px;
    color: #fff; 
    background: #00a0e9;
}
```

推荐： 

```css
button { 
    width: 100px; 
    height: 50px; 
    color: #fff; 
    background: #00a0e9;
}
```

5. 省略 0 后面的单位
不推荐： 

```css
div {
    padding-bottom: 0px; 
    margin: 0em; 
}
```

推荐： 

```css
div {
    padding-bottom: 0; 
    margin: 0; 
}
```

6. 避免使用 ID 选择器及全局标签选择器防止污染全局样式
不推荐： 
```css
#header { 
    padding-bottom: 0px; 
    margin: 0em; 
}
```

推荐： 

```css
.header { 
    padding-bottom: 0px; 
    margin: 0em;
}
```

