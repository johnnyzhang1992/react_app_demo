# React and Redux and Router learn demo

此项目是通过 [Create React App](https://github.com/facebook/create-react-app) 创建的.

## 参考书籍

- 《深入浅出 React 和 Redux》程墨 机械工业出版社
- 《React 进阶之路》 徐超 清华大学出版社

此项目主要是一些自己学习 `react`、`react-router`、`redux` 的一些 demo

## `config` file

webpack 的 config 文件，在 `config` 目录下。

## Available Scripts

在项目根目录下，你可以运行一下命令:

### `npm start`

开发模式。

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看页面.

### `npm test`

测试模式

### `npm run build`

生产模式。生成的文件在 `bulid` 文件件下。

### `serve -s build`

在浏览器中打开 [http://localhost:5000/](http://localhost:5000/) 查看 `prod` 模式下的页面.

子组件向父组件传值

### run `npm run eject`

如果执行了 `npm run eject` 命令，那么原始的配置就会发生变化。

``` js
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js --env=jsdom"
  }
```

因为在项目中引入了 `antd-mobile`，所以其他配置也需要做些修改。
`webpack.config.js` 中的 365 行左右 `babelrc: true,` false，改为 true。

并且将`package.json` 的最后关于babelrc 相关的配置删掉。因为我们已经在根目录下新建了`.babellrc` 文件，在此文件里面添加相关配置即可。

具体代码如下：

```js
{
    "presets": [
      "react-app"
    ],
    "plugins": [
        ["import", {"libraryName": "antd-mobile", "libraryDirectory": "es", "style": "css"}]
    ]
  }
```