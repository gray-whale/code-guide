# 组件设计指南
## 组件的分层，明确组件的职责

按照功能职责划分的话，大概可以拆分为 4 层，越往下通用性越强，业务耦合度也就越低：

- `基础组件`：一些业务无关的、原子的基础组件。我们常见的 antd-design, element-ui、iview 这些组件库提供的组件就属于基础组件。它的特征如下：
    - 提供了构建一个页面所需的基础组件。它们是原子的，通常不能再往下拆分
    - 符合设计规范的基础组件。它奠定了应用的整体设计风格。也就是说，如果我们需要对不同的客户定义不同的主题，应该在这一层去做，不要再上层耦合太多样式相关的定义。
        
        通常我们有一个统一的主题配置文件去配置风格。如果上层组件需要定义样式，应该引用这个配置。
        
    
- `模式组件`：模式组件依旧是业务无关的，这些组件通常是一些最佳实践和设计模式，旨在将一些重复的事情固化下来，提高开发的效率。[antd-design-pro](https://beta-pro.ant.design/docs/getting-started-cn), iview-pro 就属于这一层。
    
    比如一些通用的页面布局、表单、表格、导入导出。
    
    它们往往是基础组件的封装，将重复的代码和流程固化/标准化下来，fat-table 就是一个典型的例子, 这个组件封装了我们表格页面的一些常用的操作：
    
    - 分页
    - 表格选择
    - 删除
    - 分页和查询缓存
    
    开发者使用这些模式组件时只需要编写少量代码，关注业务和接口调用。

- `业务组件`： 业务组件，顾名思义就是耦合了我们自己的业务。它只能适用于某些特定的领域。比如用户选择器、素材选择器等等。
- `页面`：最终呈现到用户的界面，它的复用性最差。

## 遵循组件的惯用方法
很多组件都有他们的惯用方法，比如表单组件会使用 v-model 来进行绑定表单值、模态框我们会使用visible 或 show() 方法来控制显示。

遵循这些惯用方法， 可以减少开发者的心智负担，维持接口的统一性，另外也更容易地被组合/集成(比如在 Ant-design 中 Form.Item 就依赖于这个协议)。

举个例子，头像选择器：

不推荐

```js
export default {
  name: 'AvatarSelect',
  props: ['avatar'],
	methods: {
    handleSelect() {
			// ...
			this.$emit('avatar-change', value)
		}
  }
}

<avatar-select :avatar="form.avatar" @avatar-change="form.avatar = $event" />
```

推荐

```js
export default {
  name: 'AvatarSelect',
  props: ['value'],
	methods: {
    handleSelect() {
			this.$emit('input', )
		}
  }
}

// 用法
<avatar-select v-model="form.avatar" />
```

还有一些常见的惯用方法：

- 模态框。使用 `visible`(希望由父组件来控制展示) 或 `show()` 方法(由模态框组件自己控制)
- ... 待补充


## 遵循框架的风格指南
以 Vue 为例，Vue 官方提供的风格指南是最好的学习模范，它往往体现了该框架的最佳实践。这是组件化开发基础。

- [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/) 建议每位开发者熟读并遵循(支持 ESLint)
- Vue 单文件组件 (SFC) 规范
- [vuex 项目结构](https://vuex.vuejs.org/zh/guide/structure.html)
- [Vue 命名路由](https://router.vuejs.org/zh/guide/essentials/named-routes.html)

## 单一职责

单一职责，这是一个再强调也不为过的原则。说白了， 单一职责就是一个模块只负责一件事情。

单一职责要求将组件限制在一个'合适'的粒度. 这个粒度是比较主观的概念, 换句话说'单一'是一个相对的概念. 我个人觉得单一职责并不是追求职责粒度的'最小'化, 粒度最小化是一个极端, 可能会导致大量模块, 模块离散化也会让项目变得难以管理.  **单一职责要求的是一个适合被复用的粒度**.

单一职责的一些收益：

- 降低组件的复杂度. 职责单一组件代码量少, 容易被理解, 可读性高
- 降低对其他组件的耦合. 当变更到来时可以降低对其他功能的影响, 不至于牵一发而动全身
- 提高可复用性. 功能越单一可复用性越高, 就比如一些基础组件

那具体怎么做呢？

1. 控制组件体积。这是最简单的方法，如果你的代码超过 300 行，就应该捋一下，考虑进一步拆分为更小的组件。越小的组件容易被理解。
2. 出现大量重复的代码。这时候也应该警惕，将重复的代码提取出来。
3. 分离职责。职责分离有很多种方式，举一些例子：
    - 分离职责。如果一个组件同时在干多件事情，应该将它们拆分成独立的组件。
    - 分离业务和展示。如果一块业务逻辑可能用在不同的地方，或者说有不同的展示。比如在多端展示的场景，PC 端和移动端展示差异较大，但是业务逻辑是共用的。
        
        那么这块业务逻辑应该抽取出来。这些业务逻辑可以通过 mixin、高阶组件(React)、Hooks 来承载。而展示组件现在就只专注展示。
        
    - 分离布局组件和内容组件。
  
![](/experiment/1.png)

    - 布局组件用于控制页面的布局，为内容组件提供占位和容器。通过 props/slot 传入组件来进行填充. 比如`Grid`, `Layout`, `HorizontalSplit`
- 内容组件会包含一些内容，而不仅有布局。内容组件通常被布局组件约束在占位内. 比如`Button`, `Label`, `Input`

分离布局和内容组件一个典型的例子是表单，el-form-item 就是布局组件，el-input 就是内容。


## 用好框架提供的逻辑复用机制
逻辑复用机制每个视图框架提供能力不一样，比如 React 组件就是普通的JavaScript class、function，逻辑复用很灵活。

Vue 是自成一套的 DSL，提供了较多特殊的逻辑复用：

- mixin 用于组件扩展和合并
- Vue.prototype 扩展组件方法
- filter 数据格式化
- Hooks(3.x) 新的、用于取代 mixin 的逻辑复用机制
- directive 自定义模板指令

选用这些逻辑复用机制的时候需要遵循以下原则：

- 避免污染全局空间。这个容易在 mixin 中被滥用，mixin 本身就存在较多缺陷，比如难以确定来源、容易冲突等等。除了影响使用，也会导致组件耦合。
- 选择合适的复用机制。参考 element-ui
  - prototype: 适用于一些过程式的视图操作。比如消息通知、弹窗、提示：
  
```js
this.$notify({
   title: '提示',
   message: '这是一条不会自动关闭的消息',
   duration: 0
});
```
  - directive: 适用于一些’外挂式‘模板操作。比如 v-loading
  
```js
<el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
...
</el-table>
```

  - 还有一个典型的例子是权限管理：
    
```js
<button v-allows="edit" >编辑</button>
```

- Hooks 和 Mixins: 主要有以下用途
    - 用于提取重复的逻辑
    - 用于分离不相关的逻辑


## 谨防样式污染

通常情况下，Webpack 会将大部分组件的样式都提取到一个单独的 CSS 文件中，从而提高资源的加载效率。当所有样式都暴露在全局空间时，就会导致互相污染。

解决样式污染有很多方式，从实际出发，你的组件应该遵循以下约定：

- 每个组件应该有一个命名空间。且这个命名空间最好避免和其他组件冲突。

```js
<template>
	<div class="my-component">
    ...
  </div>
</template>

<style lang="scss">
  .my-component {
		// 下级组件样式
	}
<style>
```
- 推荐使用 BEM 来作为CSS 类名。让CSS 的语义和组件结构关联起来。

```js
.my-component {
  &__head {/*...*/}
  &__footer {/*...*/}
}
```

- CSS 类嵌套不要超过两级。否则从可读性和可维护性上都会大打折扣

```js
.foo {
  .bar {
		.baz {
		  // 几百几千行代码
			}
		// 几百几千行代码
	}
}
```

- 总是开启 Scoped CSS. 这是一种最简便的防止污染的方式

```js
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

- 通过 class 或 style 来定制组件的样式。这个很重要！！

```js
// ❌
<el-input />
<style>
  .el-input {
		// 样式覆盖
	}
</style>

// ✅
<el-input class="my-input" />
<style>
	.my-input {
		// 样式覆盖
	}
</style>
```

原因有很多：

- 这里已经污染了 .el-input, 会感染到其他组件和页面。
- 你依赖了组件的内部细节。一旦这些组件的类名或者结构调整，你的样式就会失效。设计良好的组件都会暴露各种样式定制的 props。

加上命名空间就好了吗？

```js
<style lang="scss">
	.my-component {
		.el-input {
			// 样式覆盖一时爽，后人维护火葬场		
		}
	}
</style>
```

不行，还是会有样式污染的风险，它会污染你的下级组件。比如

```js
// 你的组件
<template>
	<div class="my-component">
		...
    <el-input placeholder="请输入" />
    <slot></slot>
	</div>
</template>

<style lang="scss">
	.my-component {
		.el-input {
			// 样式覆盖一时爽，后人维护火葬场		
		}
	}
</style>
```

你永远无法预料下级可能会是什么：

```js
<my-component>
  dosomething
	<el-dialog :visible.sync="dialogVisible">
		<el-form>
			<el-input placeholder="what? 怎么被污染了" />
    </el-form>
  </el-dialog>
</my-component>
```

其他方案：

- Shadow DOM。实现比较麻烦
- [CSS Module](https://vue-loader.vuejs.org/zh/guide/css-modules.html)
- CSS-in-JS

## 组件的扩展
组件扩展在 React 中很常见， 比如我们要扩展和覆盖 下拉选择器：

```js
import {Select, SelectProps} from 'antd'

export interface MySelectProps extends SelectProps {
  // props 声明
}

const MySelect:FC<MySelectProps> = (props) => {
	// 远程获取列表
	const list = useRequestMyList();
  const {className, ...other} = props

	// props 转发
	return (<Select className={classnames(className, 'my-select')} {...other}>
		{!!list && list.map(i => <Select.Option key={i.id} value={i.id}>{i.name}</Select.Option>)}
  </Select>)
}
```

React 中很简单，只需要将 props 转发给下级组件即可。可能需要特殊处理的是 className、style  这些我们会进行扩展的 props

那 Vue 中如何处理呢？Vue 输入形式比较多样，所以相对来说会繁琐一点：

### **Props 定义**

Vue 的 Props 声明和 React 完全不一样，他是一个 Javascript 对象，而 React 没有对 Props 有过多约束，只是一个普通的函数参数。

有好有坏：

好处是 Vue 可以对 Props 进行验证，知道哪些是 props 哪些不是

坏处就是类型推断比较羸弱，尤其是 Mixin 也可以定义 props，这导致没办法静态推断类型。

如果要扩展一个组件，首先要定义 Props，这可以让其他开发者知道你的组件支持什么输入：

```js
<template>
  import {Select} from 'element-ui'

  export default {
    name: 'MySelect'
		props: Select.props, // 标识我们继承了 Select
  }
</template>
```

如果要扩展自己的 props 呢？

```js
<template>
  import {Select} from 'element-ui'

  export default {
    name: 'MySelect'
		props: {
			...Select.props // 标识我们继承了 Select
      myProps: {
				type: String,
				default: 'hello world'
			}
		}, 
  }
</template>
```

忽略掉某些 Props：

```js
<template>
  import {Select} from 'element-ui'
	import omit from 'lodash/omit'

  export default {
    name: 'MySelect'
		props: {
			...omit(Select.props, ['placeholder'])  // 忽略掉 placeholder
      myProps: {
				type: String,
				default: 'hello world'
			}
		}, 
  }
</template>
```

重新定义默认值：

```js
<template>
  import {Select} from 'element-ui'

  export default {
    name: 'MySelect'
		props: {
			...Select.props // 标识我们继承了 Select
      placeholder: {
				...Select.props.placeholder,
				default: 'hello world'
			}
		}, 
  }
</template>
```

遗憾的是上面的写法可能会出错，因为 props 可能在 mixin 中定义，Component.props 可能只是一部分，另外 Props 定义的语法非常多样, 可能是数组，也可能是对象。

> 请遵循 Vue 风格指南定义 Props


我们可以写一个方法来处理他们：

为了方便扩展和设置组件 props 默认值，我们再封装一个方法：

```js
/**
 * 获取一个组件的 props 定义
 */
export function getProps(componentCtor) {
  const props = {};

  // props 可能定义在 mixins 中
  if (componentCtor.mixins) {
    componentCtor.mixins.forEach(m => {
      if (m.props) {
        Object.assign(props, normalizeProps(m.props));
      }
    });
  }

	// 组件本身定义的 props
  if (componentCtor.props) {
    Object.assign(props, normalizeProps(componentCtor.props));
  }

  return props;
}

/**
 * 规范化 props 格式
 * @param {*} props
 */
function normalizeProps(props) {
  if (props == null) {
    return {};
  }
  
  if (Array.isArray(props)) {
    return props.reduce((prev, cur) => {
      prev[cur] = {};
      return prev;
    }, {});
  }

  const newProps = {};

  for (const key in props) {
    const value = props[key];
    newProps[key] = value;

    // type
    if (Array.isArray(value) || typeof value === 'function') {
      newProps[key] = {
        type: value,
      };
    }
  }

  return newProps;
}
```

```js
/**
 * 覆盖组件 Props
 * @param {Vue.Component} Component
 * @param {{defaultProps?: {[key: string]: any}, extendsProps?: {[key: string]: Vue.PropOptions}}} [options]
 */
export function overideProps(Component, options = {}) {
  const props = getProps(Component);
  const { defaultProps, extendsProps } = options;

  // 覆盖默认值
  if (defaultProps) {
    for (const key in defaultProps) {
      if (key in props) {
        // copy on write
        props[key] = { ...(props[key] || {}), default: defaultProps[key] };
      }
    }
  }

  // 自定义 props
  if (extendsProps) {
    for (const key in extendsProps) {
      // copy on write
      props[key] = { ...(props[key] || {}), ...extendsProps[key] };
    }
  }

  return props;
}
```

最终案例：

这个组件将我们常用的日期范围选择的用法规范下来，避免到处重复写：

```js
<script>
  import { DatePicker } from 'element-ui';
  import { overideProps } from '@/dss-common/utils/vue';

  /**
   * 规范的时间范围选择器
   */
  export default {
    name: 'DateRangePicker',
    props: overideProps(DatePicker, {
      defaultProps: {
        type: 'datetimerange',
        clearable: true,
        // 默认开始时间和结束时间
        defaultTime() {
          return ['00:00:00', '23:59:59'];
        },
        /**
         * 规范时间值格式
         */
        valueFormat: 'yyyy-MM-dd HH:mm:ss',
        rangeSeparator: '至',
        align: 'right',
        startPlaceholder() {
          const isMonthRange = this.type === 'monthrange';
          return isMonthRange ? '开始月份' : '开始日期';
        },
        endPlaceholder() {
          const isMonthRange = this.type === 'monthrange';
          return isMonthRange ? '结束月份' : '结束日期';
        },
        pickerOptions() {
          const isMonthRange = this.type === 'monthrange';
          return {
            shortcuts: isMonthRange
              ? [
                  {
                    text: '本月',
                    onClick(picker) {
                      const start = new Date();
                      start.setDate(1);
                      picker.$emit('pick', [start, new Date()]);
                    },
                  },
                  {
                    text: '近一年',
                    onClick(picker) {
                      const start = new Date();
                      start.setFullYear(start.getFullYear() - 1);
                      const end = new Date();
                      picker.$emit('pick', [start, end]);
                    },
                  },
                  {
                    text: '最近六个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setMonth(start.getMonth() - 6);
                      picker.$emit('pick', [start, end]);
                    },
                  },
                ]
              : [
                  {
                    text: '最近一周',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                      picker.$emit('pick', [start, end]);
                    },
                  },
                  {
                    text: '最近一个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                      picker.$emit('pick', [start, end]);
                    },
                  },
                  {
                    text: '最近三个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                      picker.$emit('pick', [start, end]);
                    },
                  },
                ],
          };
        },
      },
    }),
  };
</script>
```


### **转发 Props**

Ok，现在可以像 React 一样，将 Props 转发给内部组件了:

```js
<template>
  <el-select v-bind="{...$props, ...$attrs}" placeholder="强制覆盖的 props">
		<el-option v-for="item of list" :key="item.id" :label="item.name" :value="item.id" />
	</el-select>
</template>
```

注意，这里需要将 $attrs 也转发进去。另外你也可以强制覆盖 props

###  转发 event

转发完 props， 任务只完成的一半，事件监听也需要转发：

```js

<template>
  <el-select v-bind="{...$props, ...$attrs}" v-on="$listeners" placeholder="强制覆盖的 props">
		<el-option v-for="item of list" :key="item.id" :label="item.name" :value="item.id" />
	</el-select>
</template>
```

### 转发 slot

Slot 的转发就比较黑科技了，大部分情况你不会遇到这么复杂的场景，切忌不要滥用。

```js
<template>
  <my-awesome-component v-bind="{ ...$props, ...$attrs }" name="shit">
    <!-- 转发 普通 slot -->
    <template v-for="(slot, name) in $slots" v-slot:[name]>
      <slot :name="name"></slot>
    </template>

		<!-- 转发 作用于 slot -->
    <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="props">
      <slot :name="name" v-bind="props"></slot>
    </template>
  </my-awesome-component>
</template>
```

## 可定制的组件
### 可定制的样式

组件的样式应该是可以自由定制的, 开发者应该考虑组件的各种使用场景. 所以一个好的组件必须暴露相关的样式定制接口.  

比如对于 React 而言至少需要支持为顶层元素配置className和style属性:

```js
interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
}
```

而 Vue 则是自动添加的，自定义组件的 class 和 style 会合并到自定义组件的根元素中。

其他嵌套元素也要考虑支持配置样式, 例如 footerClassName, footerStyle.

### 考虑内容的扩展性

对于通用类型的组件，不应该将输入限定为 字符串，可以考虑 slot 或者 JSX 来支持更高级的自定义。

```js
// 同时支持 slot 和 props
<slot name="title">
  {{title}}
<slot>
```

还有一种更高级的定制手段，见下文用 JSX 赋能 Vue

## 约定大于配置
长期的开发迭代通常会产生很多惯例，将这些惯例沉淀下来，形成一套标准化的组件，可以极大地提高开发的效率。

::: tip
Wiki: 标准化（Standardization）是指制定技术标准并就其达成一致意见的过程。标准往往是一份文件，用于确定统一的工程、设计或技术规范、准则、方法、过程或惯例。
:::

我们以常见的表格页面为例，通常是这样的：

```js
<template>  

<div class="my-list">
    <div class="filter">
      <el-form inline @submit.native.prevent class="wkt-opt-label-container">
        <el-form-item label="号码搜索：">
          <el-input
            v-model="form.signedUserPhone"
            type="input"
            prefix-icon="el-icon-search"
            class="dss-filter-large-input"
            placeholder="搜索手机号"
          ></el-input>
        </el-form-item>
        <el-button class="single-search-btn" type="primary" @click="onSearch">搜索</el-button>
      </el-form>
    </div>
    <div class="table">
      <el-table :data="checkinData" class="wkt-table" v-loading="loading">
        <el-table-column align="center" label="签到用户">
          <template slot-scope="scope">
            <div class="header-user">
              <img :src="scope.row.signedUserPhotoUrl" alt="no image " />
              <p style="padding-left: 5px">{{ scope.row.signedUserName }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="signedUserPhone" label="手机号" />
        <el-table-column
          align="center"
          :formatter="allSignedCountformater"
          prop="allSignedCount"
          label="累计签到天数"
        />
        <el-table-column align="center" :formatter="allAwardPointsformater" prop="allAwardPoints" label="奖励总积分" />
        <el-table-column
          align="center"
          :formatter="allAwardCouponNumformater"
          prop="allAwardCouponNum"
          label="奖励优惠券数量"
        />
      </el-table>
      <el-pagination
        v-if="totalCount"
        :hide-on-single-page="true"
        @size-change="onSizeChange"
        @current-change="onPageChange"
        :page-size="page.pageSize"
        :page-sizes="[5, 10, 20, 30, 40, 50, 100]"
        layout="sizes, prev, pager, next"
        :total="totalCount"
      >
      </el-pagination>
    </div>

</template>

<script>
  export default {
    mounted() {
      this.getList()
    },

    data() {
      return {
        checkinData: [],
        totalCount: 0,
        listLoading: false,
        page: {
          pageNo: 1,
          pageSize: 10,
        },
        form: {
          signedUserPhone: '',
        },
      };
    },

    methods: {
      onSizeChange(e) {
        this.page.pageSize = e;
        this.getlist();
      },


      onPageChange(e) {
        this.page.pageNo = e;
        this.getlist();
      },

      getlist() {
        this.loading = true;
        checkinApi
          .list({
            pageNo: this.page.pageNo,
            pageSize: this.page.pageSize,
            signedUserPhone: this.form.signedUserPhone,
          })
          .then(res => {
            this.checkinData = res.data;
            this.page.pageSize = res.pageSize;
            this.page.pageNo = res.pageNo;
            this.totalCount = res.totalCount;
          })
          .always(_ => {
            this.loading = false;
          });
      },
      onSearch() {
        this.page.pageNo = 1;
        this.getlist();
      },
    },
  };
</script>
```

这是一个最典型的表单页面了：表单、表格、分页。这些处理逻辑在每个页面都重复，着实让人难受，能不能将这些流程处理惯例固化下来。

于是我们编写了 [fat-table](http://gitlab.wakedata-inc.com/fecookie/wk-ump/dss-web/-/blob/c5b834874589c0181335829968cac3da0c3bd2da/project/dss-common/components/list-page/fat-table/index.vue) 组件：

```js
<template>  

<div class="my-list">
    <div class="filter">
      <el-form inline @submit.native.prevent="$refs.table.search()" class="wkt-opt-label-container">
        <el-form-item label="号码搜索：">
          <el-input
            v-model="form.signedUserPhone"
            type="input"
            prefix-icon="el-icon-search"
            class="dss-filter-large-input"
            placeholder="搜索手机号"
          ></el-input>
        </el-form-item>
        <el-button class="single-search-btn" type="primary" native-type="submit">搜索</el-button>
      </el-form>
    </div>
    <div class="table">
      <fat-table ref="table" class="wkt-table" :fetch-handler="getList">
        <el-table-column label="签到用户">
          <template slot-scope="scope">
            <div class="header-user">
              <img :src="scope.row.signedUserPhotoUrl" alt="no image " />
              <p style="padding-left: 5px">{{ scope.row.signedUserName }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="signedUserPhone" label="手机号" />
        <el-table-column
          :formatter="allSignedCountformater"
          prop="allSignedCount"
          label="累计签到天数"
        />
        <el-table-column :formatter="allAwardPointsformater" prop="allAwardPoints" label="奖励总积分" />
        <el-table-column
          :formatter="allAwardCouponNumformater"
          prop="allAwardCouponNum"
          label="奖励优惠券数量"
        />
      </fat-table>

    </div>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          signedUserPhone: '',
        },
      };
    },

    methods: {
      async getlist({pageNo, pageSize}) {
				const {data: list, totalCount: total} = await checkinApi.list({pageNo, pageSize, ...this.form})
        return {list, total}
      },
    },
  };
</script>
```

我们将视图逻辑都封装了起来，你只需要关注接口请求。fat-table 可以封装表格的大部分视图逻辑，比如选择、删除、搜索、状态缓存、上移下移等等。

对于 80% 的场景还可以进一步升华，通过高阶的配置来生成组件或者页面:

```js
createTablePage({
  form: [
	  {
			key: 'name',
			label: '名称',
			type: Input 
		},
		{
			key: 'date',
			label: '时间',
			type: DateRangePicker,
			mapper: [start, end] => ({start, end})
		},
		{
			key: 'status',
			label: '状态',
			type: Select,
			options: [
				{
					label: '成功',
					value: 0
				},
				{
					label: '失败',
					value: 1
				}
			]
		}
	],
	table: {
    column: [
			{
				prop: 'name',
				label: '名称'
			},
		  {
				prop: 'address',
				label: '地址'
				render: (value) => ['province', 'city', 'distinct'].map(i => value[i]).join(',')
			},
			{
				props: 'price',
				filter: 'price',
				label: '价格'
			},
			{
				label: '操作',
				actions: [
					{
						label: '编辑',
						link: '/something/:id',
					},
					{
						label: '删除',
						action: 'remove',
					}
				]
			}
		],
		onQuery({pageNo, pageSize, form}) {
		  return list({pageNo, pageSize, ...form})
		},
		onRemove(ids) {
			return remove(ids)
		}
	}
})
```


再往前发展，大家能想到的就是 LowCode/NoCode 这些方向了。LowCode/NoCode 并不是凭空出来的，它们的基础是标准化，越专门的领域越容易标准化。

好的框架的重要目标是让开发者专注于业务本身。我们做标准化的目的也是如此，我们要思考从业务的角度，开发者需要关注哪些东西？如果从视图的角度很容易又耦合底层实现和业务无关的逻辑，把事情复杂化。

另外也要避免过度设计，能够覆盖80%的使用场景已经非常厉害了，保持内核简洁，预留扩展接口对后期发展更重要些。

所以，编写代码的时候要遵循 DRY 原则，思考怎么把流程、业务沉淀下来，形成通用的模式和标准，从而进一步解决效率问题。

## 依赖注入
Vue 和 React 都提供 Provide/Inject 机制，可以将状态和方法注入给子孙组件。常用于以下两种场景：

- 组件族。例如我们常见的 Select/Option, Form/Form-Item, table/table-column, CheckboxGroup/Checkbox, 地图 Map/Marker.. 等等
    
    这些组件父子都有强绑定关系，父子之间需要共享状态和通信。虽然我们可以通过查找祖先的形式来找到父节点，但是依赖注入形式会更优雅一些，不需要处理组件的生命周期，也更方便测试。
    
- 全局配置。比如 Antd `ConfigProvider`，`Theme`,  Redux、Mobx 的 Provider 等等。通常用于配置应用的全局状态。
  
```js
export default () => (
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>
);
```

## 用 JSX 赋能 Vue

Vue 本身是完全支持 [JSX 渲染的](https://cn.vuejs.org/v2/guide/render-function.html)，但是大部分情况我们还是习惯或者推荐使用模板。

如果你习惯了 React 的 renderProps ，觉得 Vue 的 slot 不够用，那么可以上 JSX。

举个例子：我们创建一个 fields 组件来展示 key-value 信息，例如：

![](/experiment/2.png)

嗯，很简单，就这样：

```js
    <card title="用户价值" class="stretch">
        <fields
        label-width="8em"
        :options="[
            { k: '累计消费', v: userValue.consumeAmount },
            { k: '消费次数', v: `${userValue.consumeCount}次` },
            { k: '最近支付时间', v: $filters.dateTimeFormat(userValue.lastConsumeTime) },
            { k: '客单价', v: userValue.perCustomerTransaction },
        ]"
        >
        </fields>
    </card>  
```

现在又来一个需求：

![](/experiment/3.png)

What？要加上 el-switch 组件，可是 v只能传入字符串呀？slot 和 scopedSlot 也做不到，要是 React 就方便了：

```js
       <Fields
          options={[
            { k: '会员状态', v: () => <div>React 很方便</div> },
            { k: '会员类型', v: '普通会员' },
            { k: '会员等级', v: info.levelName },
          ]}
        >
        </Fields>
```

Vue 实际上也可以做到。我们先创建一个 jsx 渲染容器：

```js
/**
 * 用于 JSX 自定义渲染
 * Vue 的 JSX 用法和 React 有较大的差异，详见 https://github.com/vuejs/jsx
 */
export default Vue.extend({
  functional: true,
  name: 'JSXWrapper',
  props: {
    renderer: {
      type: Function,
      required: true,
    },
  },
  render(h, context) {
    // 传入 renderer 来渲染
    return context.props.renderer(h, context);
  },
});
```
重构一下 fields 组件：

```js
<template>
  <div class="fields">
    <div v-for="item of options" :key="item.k" class="field">
      <div class="key" :style="{ width: labelWidth }">{{ item.k }}:</div>
      <div class="value">
        <!-- 动态渲染 -->
        <template v-if="typeof item.v === 'function'">
          <jsx :item="item" :renderer="item.v"></jsx>
        </template>
        <template v-else>
          {{ item.v }}
        </template>
      </div>
    </div>
  </div>
</template>
```

除此之外还有很多应用场景，比如弹窗，通知，配置文件等需要灵活渲染的场景。


## UI 规范就是组件的规范

![](/experiment/4.png)

市面上的组件库都是建立在 UI 规范基础上的，没有 UI/UE 规范，很难建立标准化的组件库。

建立 UI 规范的目的：

- 提供团队协作效率、降低沟通成本
- 提高组件的复用率. 统一的组件规范可以让组件更好管理
- 保持产品迭代过程中品牌一致性


## 结合使用 rem 和 em 等相对单位, 创建更有弹性的组件
Bootstrap v4 全面使用 rem 作为基本单位, 这使得所有组件都可以响应浏览器字体的调整:

rem 可以让整个文档可以响应 html 字体的变化, 经常用于移动端等比例还原设计稿, 详见[Rem 布局的原理解析](https://www.zhihu.com/column/p/30413803). 

我个人对于觉得对弹性组件来说更重要的是 em 单位, 尤其是那些比例固定组件, 例如 Button, Switch, Icon. 比如我会这样定义 svg Icon 的样式:

```js
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
```

像 iconfont 一样, 外部只需要设置font-size就可以配置 icon 到合适的尺寸, 默认则继承当前上下文的字体大小:

```js
<MyIcon style={{ fontSize: 17 }} />
```

或者是 Switch 这类组件：

```js
const px = (num: number) => `${num / 16}em`;

const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: ${px(44)};
  height: ${px(22)};
  line-height: ${px(20)};
  vertical-align: middle;
  border-radius: ${px(20)};
  outline: none;
  box-shadow: inset 0 0 0 ${px(2)} #dadada;
  transition: box-shadow 0.2s ease;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: ${px(1)};
    top: ${px(1)};
    width: ${px(20)};
    height: ${px(20)};
    border-radius: ${px(20)};
    box-shadow: 0 ${px(2)} ${px(5)} rgba(0, 0, 0, 0.4);
    background-color: white;
    transition: left 0.3s ease, width 0.3s ease;
  }
`;
```

## 创建严格的模块边界

我觉得应该创建严格的模块边界，一个模块只有一个统一的'出口'。例如一个复杂的组件:

```js
ComplexPage/
  components/
    Foo.tsx
    Bar.tsx
  constants.ts
  reducers.ts
  style.css
  types.ts
  index.tsx # 出口
```

可以认为一个‘目录’就是一个模块边界. 你不应该这样子导入模块:

```js
import ComplexPage from '../ComplexPage';
import Foo from '../ComplexPage/components/Foo';
import Foo from '../ComplexPage/components/Bar';
import { XXX } from '../ComplexPage/components/constants';
import { User, ComplexPageProps } from '../ComplexPage/components/type';
```

一个模块/目录应该由一个‘出口’文件来统一管理模块的导出，限定模块的可见性. 比如上面的模块，components/Foo、 components/Bar和constants.ts这些文件其实是 ComplexPage 组件的'实现细节'. 这些是外部模块不应该去耦合的实现细节，但这个在语言层面并没有一个限定机制，只能依靠规范约定.

>当其他模块依赖某个模块的'细节'时, 可能是一种重构的信号: 比如依赖一个模块的一个工具函数或者是一个对象类型声明, 这时候可能应该将其抬升到父级模块, 让兄弟模块共享它.

在前端项目中 index 文件最适合作为一个'出口'文件, 当导入一个目录时，模块查找器会查找该目录下是否存在的 index 文件. 开发者设计一个模块的 API 时, 需要考虑模块各种使用方式, 并使用 index 文件控制模块可见性:

```js
// 导入外部模块需要使用的类型
export * from './type';
export * from './constants';
export * from './reducers';

// 不暴露外部不需要关心的实现细节
// export * from './components/Foo'
// export * from './components/Bar'

// 模块的默认导出
export { ComplexPage as default } from './ComplexPage';
```

现在导入语句可以更加简洁:

```js
import ComplexPage, { ComplexPageProps, User, XXX } from '../ComplexPage';
```

## 单向数据流

坚持数据的[单向数据流原则](https://cn.vuejs.org/v2/guide/components-props.html#单向数据流)。即数据是从父组件自然向子组件流动的，不能逆向。

单向数据流原则的好处在于状态变化的可追溯性，让组件的关系更容易被理解，更容易被测试。

给几点建议：

- 只通过 props 向下级传递状态。不要通过 ref 这类方式，过程式地去影响下级组件的状态。
- 下级组件只通过 event 向上级通信。
- 下级组件不准修改 props 源数据。
- 遵循 v-model, update:* 协议。
- v-model 遵循数据不可变原则。即你不能直接修改 value，而是应该创建一个新的 value。

```js
// 假设 value 是一个列表
handleRemove(item) {
  const idx = this.value.indexOf(item)
  if (idx !== -1) {
    const newValue = [...this.value]
		newValue.splice(idx, 1)
    this.$emit('input', newValue)
	}
}
```

- 使用 computed 来衍生数据。保持源数据的纯洁。
- 分离业务状态和视图状态。比如列表项的激活状态就是视图状态，而后端返回的数据就是业务状态。

```js
// 推荐
<item :checked="item.id in checked" @click="checked.add(item.id)" />

// 不推荐: 直接在源数据上添加了一个字段，污染了原有的数据。
<item :checked="item.checked" @click="item.checked = true" />
```

## 样式应该映射组件的层级结构

样式表的结构应该是组件结构的映射。BEM 可以很好的实现这种需求

组件结构

```js
<div class="mycomp">
  <div class="mycomp__header">header here</div>
  <div class="mycomp__content">content here</div>
</div>
```

样式结构

```js
.mycomp {        // 映射组件(名词)
  &__header {    // 映射组件的结构(名词)
	}

  &__content {
    &--visible {}   // 组件的状态(动词、动名词)
    &--disbaled {}  // 组件状态
	}
}
```

如果样式结构能够较好地映射组件结构，那样式的可读性、可维护性会有较大的提高。比如：

- 如果组件结构的变动和废弃，我们可以很容易地定位相应的样式。但是像 title、container、icon 这种非常单一、常见、烂大街的类名，则很难定位，尤其是在外部可能覆盖样式的场景。
- 一定程度上可以避免组件之间的样式污染。比如上面的样式都是  .mycomp 这个闭包内。
- 我们可以通过样式推断出组件的结构，反之亦然。可读性、心智负担都比较低。



