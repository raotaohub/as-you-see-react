## `思路`：

1. 通过 webpack resolve.alias 改变依赖包的指向，我们可以指向打包后的 react 源码，来调试 react 源码。
2. 恰巧指向源码后，其同目录下如果包含.map.js 文件，就能定位未压缩前的源码位置。

---

## 开始具体操作

### 1. `拉取本仓库`

```shell
git clone https://github.com/raotaohub/as-you-see-react.git
```

### 2. `安装依赖`

```shell
1.  cd debug-react-web
2.  yarn install
```

### 3. 启动 Vs Code 运行调试

1. cd debug-react-web and yarn start 先把项目启动起来。
2. 然后使用 Vs Code 运行调试。根据自己需要配置也行。

> 注意：用 vscode 打开 as-you-see-react 件，这样源码和 webDemo 都在工作区了比较方便。

> 注意：调试工具在 VScode 侧边栏一只小虫子的按钮。如果不会使用 google 一下很简单。

### 尽情调试

1. 主要的源码位置位于 `react\packages`中的 react、react-dom、react-reconciler、scheduler 文件夹中。
2. 没有使用 VScode 调试工具的话，可以直接在浏览器打断点。
3. 使用 VScode 调试工具可以直接在 VScode 里打断点。（推荐）
4. 可以在不增删的情况下写注释，写代码。(sourceMap 映射行对应不上会乱的)

现在在源码里随意打断点就行了,注意发行版的代码在.old.js 里，也就是说 new.js 的可以不用看，因为 react 一直在同构。

# 其他辅助信息

## 各模块系统和主要方法

[bubucuo 总结的思维导图](https://www.processon.com/view/link/60b206c2e0b34d3841931a88)

## 使用 Chrome Performance 标签分析组件

[Optimizing Performance – React (docschina.org)](https://react.docschina.org/docs/optimizing-performance.html)

## React Profiler

[React Profiler 介绍 – React Blog (docschina.org)](https://react.docschina.org/blog/2018/09/10/introducing-the-react-profiler.html)

## console 控制台

```js
$0` `$1` `$_
```

- `$0`: 引用最后一次选中的 dom 节点
- `$1`: 引用倒数第二个选中的 dom 节点
- `$_`: 引用 console 中上一个表达式返回的值
- 使用场景：在 console 中我们可能经常要尝试一些功能，写一些测试代码。`$0` 和 `$1` 能够让我们快速选中 dom 节点，对选中的 dom 做些操作。`$_` 方便我们在没有给返回值赋给变量，但又需要引用这个值的情况使用。

### 浏览器调试思路

1. 条件表达式,浏览器的条件断点

xxx == true 、xxx=='xxx' 表达式为 ture 才进入断点

2. 保存为全局对象

3. 在浏览器修改本地代码等

具体可自行搜索

### VsCode 一些小技巧

1. 代码层级折叠

- 折叠 **`Ctrl+Shift+[`**

- 展开 **`Ctrl+Shift+]`**

- 代码折叠：先按 ctrl+k，再按 ctrl+0 [注意 0 为数字 0]

  代码展开：先按 ctrl+k，再按 ctrl+j

### react 新旧渲染模式对比 demo

https://claudiopro.github.io/react-fiber-vs-stack-demo/

## 参考

[zxg\_神说要有光](https://juejin.cn/user/2788017216685118)

[React 源码学习进阶篇（一）新版 React 如何调试源码？ (qq.com)](https://mp.weixin.qq.com/s/rjSrV6opaef1lqLM7S5F_Q)
