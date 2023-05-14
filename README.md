## `思路`：

1. 通过 webpack resolve.alias 改变依赖包的指向，我们可以指向打包后的 react 源码，来调试 react 源码。
2. 恰巧指向源码后，其同目录下如果包含.map.js 文件，就能定位未压缩前的源码位置。

---

## 开始具体操作

### 1. `拉取本仓库`

### 2. `安装依赖`

1.  cd debug-react-web
2.  yarn install

### 3. 启动 Vs Code 运行调试

1. cd react-debug & yarn start 先把这个启动起来
2. 然后使用 Vs Code 运行调试，选"针对 localhost 启动 Edge 调试"。

调试工具在 VScode 侧边栏一个小虫子和三角形的那个。

### 尽情调试

现在在源码里随意打断点就行了,注意发行版的代码在.old.js 里，也就是说 new.js 的可以不用看，因为 react 一直在同构。

# 其他辅助信息

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

元素 & 源码

​ store as global variable 保存为全局变量

条件表达式

xxx == true 、xxx=='xxx' 表达式为 ture 才进入断点

VsCode 代码层级折叠

- 折叠 **`Ctrl+Shift+[`**

- 展开 **`Ctrl+Shift+]`**

- 代码折叠：先按 ctrl+k，再按 ctrl+0 [注意 0 为数字 0]

  代码展开：先按 ctrl+k，再按 ctrl+j

18 对比 demo

https://claudiopro.github.io/react-fiber-vs-stack-demo/

# 参考

[zxg\_神说要有光](https://juejin.cn/user/2788017216685118)

[React 源码学习进阶篇（一）新版 React 如何调试源码？ (qq.com)](https://mp.weixin.qq.com/s/rjSrV6opaef1lqLM7S5F_Q)
