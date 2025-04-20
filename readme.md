以下是为 `ConsoleColor` 编写的 README 文档，包含了库的功能介绍、安装方法、使用示例以及 API 说明。

---

# ConsoleColor

**ConsoleColor** 是一个功能强大的控制台美化库，旨在帮助开发者以更直观、美观的方式输出日志信息。支持多种日志级别、自定义样式、网络请求日志格式化等功能，适用于调试和开发过程中的日志管理。

---

## 特性

- **丰富的日志级别**：支持普通日志、信息日志、警告日志、错误日志、成功日志等。
- **自定义样式**：可以自定义文字颜色和背景颜色，满足个性化需求。
- **网络请求日志**：格式化输出网络请求信息（URL、HTTP 方法、状态码、响应时间）。
- **分组与表格**：支持日志分组、折叠分组以及表格打印功能。
- **性能分析**：提供启动、停止性能分析的工具。
- **兼容性强**：基于浏览器原生 `console` API 构建，适用于主流浏览器。

---

## 安装

直接将 `console-color.js` 文件引入到项目中：

```html
<script src="path/to/console-color.js"></script>
```

或者通过模块化方式引入（如果支持 ES6 模块）：

```javascript
import { ConsoleColor } from './console-color.js';
```

---

## 使用示例

### 1. 基本日志输出

```javascript
// 普通日志
ConsoleColor.log('这是一个普通日志！');

// 成功日志
ConsoleColor.success('操作成功！');

// 错误日志
ConsoleColor.error('发生了一个错误！');

// 警告日志
ConsoleColor.warn('这是一个警告！');

// 信息日志
ConsoleColor.info('这是一个信息提示！');
```

### 2. 自定义样式

```javascript
// 自定义文字颜色和背景颜色
ConsoleColor.log('这是自定义样式的日志！', true, '#ffffff', '#ff0000'); // 白字红底
ConsoleColor.info('这是绿色文字的日志！', true, '#00ff00'); // 绿色文字
ConsoleColor.error('这是黄色背景的日志！', true, undefined, '#ffff00'); // 黄色背景
```

### 3. 网络请求日志

```javascript
// 成功的 GET 请求
ConsoleColor.network('https://api.example.com/data', 'GET', 200, 150);

// 失败的 POST 请求
ConsoleColor.network('https://api.example.com/submit', 'POST', 500, 300);

// 自定义颜色的网络请求日志
ConsoleColor.network(
  'https://api.example.com/custom',
  'PUT',
  404,
  200,
  '#ffffff', // 白色文字
  '#ff00ff'  // 紫色背景
);
```

### 4. 日志分组与表格

```javascript
// 创建日志分组
ConsoleColor.group('分组标题');
ConsoleColor.log('这是分组内的日志');
ConsoleColor.groupEnd();

// 打印表格
ConsoleColor.table([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]);
```

---

## API 文档

### 1. 基础日志方法

| 方法名       | 参数                                                                 | 描述                          |
|--------------|----------------------------------------------------------------------|-------------------------------|
| `log`        | `(message, useDefaultStyle = true, customTextColor, customBackgroundColor)` | 打印普通日志                  |
| `info`       | `(message, useDefaultStyle = true, customTextColor, customBackgroundColor)` | 打印信息日志                  |
| `warn`       | `(message, useDefaultStyle = true, customTextColor, customBackgroundColor)` | 打印警告日志                  |
| `error`      | `(message, useDefaultStyle = true, customTextColor, customBackgroundColor)` | 打印错误日志                  |
| `success`    | `(message, useDefaultStyle = true, customTextColor, customBackgroundColor)` | 打印成功日志                  |
| `debug`      | `(message, useDefaultStyle = true)`                                 | 打印调试日志                  |

### 2. 高级功能

| 方法名         | 参数                                                                 | 描述                          |
|----------------|----------------------------------------------------------------------|-------------------------------|
| `assert`       | `(condition, message, useDefaultStyle = true)`                      | 断言，条件为假时打印日志      |
| `clear`        | `()`                                                                | 清空控制台                    |
| `count`        | `(label = 'default')`                                               | 计数器                        |
| `countReset`   | `(label = 'default')`                                               | 重置计数器                    |
| `dir`          | `(...args)`                                                         | 显示对象结构                  |
| `dirxml`       | `(...args)`                                                         | 打印 XML/HTML 元素表示        |
| `group`        | `(message, useDefaultStyle = true)`                                 | 创建分组                      |
| `groupCollapsed` | `(message, useDefaultStyle = true)`                               | 创建折叠分组                  |
| `groupEnd`     | `()`                                                                | 结束分组                      |
| `profile`      | `(name)`                                                            | 启动性能分析                  |
| `profileEnd`   | `(name)`                                                            | 停止性能分析                  |
| `table`        | `(data, columns)`                                                   | 打印表格                      |
| `time`         | `(label = 'default')`                                               | 启动计时器                    |
| `timeEnd`      | `(label = 'default')`                                               | 停止计时器并打印时间          |
| `timeLog`      | `(label = 'default', ...args)`                                      | 打印计时器当前值              |
| `timeStamp`    | `(label)`                                                           | 添加时间戳                    |
| `trace`        | `(message, useDefaultStyle = true)`                                 | 输出堆栈跟踪                  |
| `divider`      | `()`                                                                | 打印分隔线                    |

### 3. 网络请求日志

| 方法名         | 参数                                                                 | 描述                          |
|----------------|----------------------------------------------------------------------|-------------------------------|
| `network`      | `(url, method = 'GET', status = 200, responseTime, customTextColor, customBackgroundColor)` | 打印网络请求日志             |

---

## 示例截图

### 日志样式
![日志样式](https://img.picui.cn/free/2025/04/20/680462ad3cfe2.png)
![日志样式](https://img.picui.cn/free/2025/04/20/680462ad3eeab.png)
---

## 贡献

欢迎贡献代码或提出改进建议！如果您发现任何问题或希望添加新功能，请提交 Issue 或 Pull Request。

---

## 许可证

本项目采用 [MIT 许可证](LICENSE)。