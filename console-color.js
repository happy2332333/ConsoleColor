/**
 * 控制台美化库
 */
const ConsoleColor = (() => {

  

  // 打印初始化消息
  console.log(
    '%c</> console-color.js 已启动...',
    'color: #2c3e50; background-color: #ecf0f1; font-weight: bold; padding: 2px 5px; border-radius: 3px;'
  );

  const defaultStyles = {
    info: { icon: 'ℹ️', color: '#3498db', background: '#ecf0f1' },
    warn: { icon: '⚠️', color: '#f1c40f', background: '#fef9e7' },
    error: { icon: '❌', color: '#e74c3c', background: '#fdecea' },
    success: { icon: '✅', color: '#2ecc71', background: '#e8f8f5' },
    debug: { icon: '🔧', color: '#9b59b6', background: '#f8f9fa' },
    assert: { icon: '🚨', color: '#e67e22', background: '#fceae1' },
    log: { icon: '📝', color: '#2c3e50', background: '#ecf0f1' },
    group: { icon: '📂', color: '#34495e', background: '#ecf0f1' },
    table: { icon: '📊', color: '#1abc9c', background: '#e8f8f5' },
    trace: { icon: '🔍', color: '#2980b9', background: '#ecf0f1' },
    trace: { icon: '🔍', color: '#2980b9', background: '#ecf0f1' },
  };

  /**
 * 获取日志样式
 * @param {string} level - 日志级别
 * @param {boolean} useDefaultStyle - 是否使用默认样式
 * @param {string} [customTextColor] - 自定义文字颜色
 * @param {string} [customBackgroundColor] - 自定义背景颜色
 * @returns {{ icon: string, style: string }}
 */
  function getStyles(level, useDefaultStyle, customTextColor, customBackgroundColor) {
    const { icon, color, background } = defaultStyles[level] || {};

    // 根据优先级决定最终的颜色
    const textColor = customTextColor || (useDefaultStyle ? color : background);
    const bgColor = customBackgroundColor || (useDefaultStyle ? background : color);

    return {
      icon,
      style: `color: ${textColor}; background-color: ${bgColor}; font-weight: bold; padding: 2px 5px; border-radius: 3px;`,
    };
  }

  return {
    /**
   * 打印普通日志
   */
    log(message, useDefaultStyle = true, customTextColor, customBackgroundColor) {
      const styles = getStyles('log', useDefaultStyle, customTextColor, customBackgroundColor);
      console.log(`%c${styles.icon} LOG: ${message}`, styles.style);
    },

    /**
     * 打印信息日志
     */
    info(message, useDefaultStyle = true, customTextColor, customBackgroundColor) {
      const styles = getStyles('info', useDefaultStyle, customTextColor, customBackgroundColor);
      console.log(`%c${styles.icon} INFO: ${message}`, styles.style);
    },

    /**
     * 打印警告日志
     */
    warn(message, useDefaultStyle = true, customTextColor, customBackgroundColor) {
      const styles = getStyles('warn', useDefaultStyle, customTextColor, customBackgroundColor);
      console.warn(`%c${styles.icon} WARN: ${message}`, styles.style);
    },

    /**
     * 打印错误日志
     */
    error(message, useDefaultStyle = true, customTextColor, customBackgroundColor) {
      const styles = getStyles('error', useDefaultStyle, customTextColor, customBackgroundColor);
      console.error(`%c${styles.icon} ERROR: ${message}`, styles.style);
    },

    /**
     * 打印成功日志
     */
    success(message, useDefaultStyle = true, customTextColor, customBackgroundColor) {
      const styles = getStyles('success', useDefaultStyle, customTextColor, customBackgroundColor);
      console.log(`%c${styles.icon} SUCCESS: ${message}`, styles.style);
    },

    /**
     * 打印调试日志
     */
    debug(message, useDefaultStyle = true) {
      const styles = getStyles('debug', useDefaultStyle);
      console.debug(`%c${styles.icon} DEBUG: ${message}`, styles.style);
    },

    /**
     * 断言
     */
    assert(condition, message, useDefaultStyle = true) {
      if (!condition) {
        const styles = getStyles('assert', useDefaultStyle);
        console.assert(false, `%c${styles.icon} ASSERT: ${message}`, styles.style);
      }
    },

    /**
     * 清空控制台
     */
    clear() {
      console.clear();
    },

    /**
     * 计数器
     */
    count(label = 'default') {
      console.count(label);
    },

    /**
     * 重置计数器
     */
    countReset(label = 'default') {
      console.countReset(label);
    },

    /**
     * 显示对象结构
     */
    dir(...args) {
      console.dir(...args);
    },

    /**
     * 打印 XML/HTML 元素表示
     */
    dirxml(...args) {
      console.dirxml(...args);
    },

    /**
     * 创建分组
     */
    group(message, useDefaultStyle = true) {
      const styles = getStyles('group', useDefaultStyle);
      console.group(`%c${styles.icon} GROUP: ${message}`, styles.style);
    },

    /**
     * 创建折叠分组
     */
    groupCollapsed(message, useDefaultStyle = true) {
      const styles = getStyles('group', useDefaultStyle);
      console.groupCollapsed(`%c${styles.icon} GROUP: ${message}`, styles.style);
    },

    /**
     * 结束分组
     */
    groupEnd() {
      console.groupEnd();
    },

    /**
     * 启动性能分析
     */
    profile(name) {
      console.profile(name);
    },

    /**
     * 停止性能分析
     */
    profileEnd(name) {
      console.profileEnd(name);
    },

    /**
     * 打印表格
     */
    table(data, columns) {
      const styles = getStyles('table');
      console.log(`%c${styles.icon} TABLE`, styles.style);
      console.table(data, columns);
    },

    /**
     * 启动计时器
     */
    time(label = 'default') {
      console.time(label);
    },

    /**
     * 停止计时器并打印时间
     */
    timeEnd(label = 'default') {
      console.timeEnd(label);
    },

    /**
     * 打印计时器当前值
     */
    timeLog(label = 'default', ...args) {
      console.timeLog(label, ...args);
    },

    /**
     * 添加时间戳
     */
    timeStamp(label) {
      console.timeStamp(label);
    },

    /**
     * 输出堆栈跟踪
     */
    trace(message, useDefaultStyle = true) {
      const styles = getStyles('trace', useDefaultStyle);
      console.trace(`%c${styles.icon} TRACE: ${message}`, styles.style);
    },

    /**
     * 分隔线
     */
    divider() {
      console.log(
        '%c--------------------------------------------------',
        'color: #95a5a6; font-style: italic;'
      );
    },

    /**
      * 打印网络请求日志
      */
    network(url, method = 'GET', status = 200, responseTime, customTextColor, customBackgroundColor) {
      // 根据状态码选择默认样式
      const level = status >= 500 ? 'error' :
        status >= 400 ? 'warn' :
          status >= 300 ? 'info' : 'success';

      const styles = getStyles(level, true, customTextColor, customBackgroundColor);

      // 构造日志内容
      const logMessage = `${styles.icon} NETWORK: ${method.toUpperCase()} ${url} [${status}]`;
      const timeMessage = responseTime ? `(${responseTime}ms)` : '';

      console.log(`%c${logMessage} ${timeMessage}`, styles.style);
    },
    
  };
})();

