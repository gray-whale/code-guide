# LESS规范
## 代码组织 

1. 将公共 less 文件放置在 style/less/common 文件夹

例: // color.less,common.less

2. 按以下顺序组织

1、@import; 2、变量声明; 3、样式声明;

```css
@import "mixins/size.less"; 
@default-text-color: #333; 
.page { width: 960px; margin: 0 auto; }
```

## 避免嵌套层级过多
将嵌套深度限制在 3 级。对于超过 4 级的嵌套，给予重新评估。这可以避免出现过于详实的 CSS 选择器。避免大量的嵌套规则。当可读性受到影响时，将之打断。推荐避免出现多于 20 行的嵌 套规则出现

不推荐： 
```css
.main { 
    .title { 
        .name { 
            color: #fff; 
        } 
    } 
}
```

推荐：

```css
.main-title { 
    .name { 
        color: #fff; 
    } 
}
```

