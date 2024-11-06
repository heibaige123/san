/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file bool属性表
 */

/**
 * 一个表示HTML中布尔属性的对象。
 * 这个对象中的每个属性对应一个布尔属性，
 * 属性名是属性的名称，值为1。
 *
 * 布尔属性是只能有真或假值的属性。
 * 当布尔属性存在时，其值为真，当它不存在时，其值为假。
 *
 * @type {Object.<string, number>}
 */
var boolAttrs = {
    /**
     * allowpaymentrequest属性用于<iframe>标签
     * 允许页面使用支付请求API
     */
    allowpaymentrequest: 1,
    /**
     * async属性用于<script>标签
     * 异步加载脚本
     */
    async: 1,
    /**
     * autofocus属性用于<input>、<textarea>、<select>标签
     * 页面加载时自动获得焦点
     */
    autofocus: 1,
    /**
     * autoplay属性用于<video>、<audio>标签
     * 自动播放媒体
     */
    autoplay: 1,
    /**
     * checked属性用于<input>标签
     * 预选中状态
     */
    checked: 1,
    /**
     * controls属性用于<video>、<audio>标签
     * 显示控件（如播放、暂停按钮）
     */
    controls: 1,
    /**
     * default属性用于<track>标签
     * 默认轨道
     */
    default: 1,
    /**
     * defer属性用于<script>标签
     * 延迟执行脚本直到页面加载完成
     */
    defer: 1,
    /**
     * disabled属性用于<input>、<button>、<select>、<textarea>标签
     * 禁用元素
     */
    disabled: 1,
    /**
     * formnovalidate属性用于<button>、<input>标签
     * 提交表单时不验证
     */
    formnovalidate: 1,
    /**
     * hidden属性用于所有HTML标签
     * 隐藏元素
     */
    hidden: 1,
    /**
     * ismap属性用于<img>标签
     * 图像是服务器端图像映射
     */
    ismap: 1,
    /**
     * itemscope属性用于所有HTML标签
     * 定义项目范围
     */
    itemscope: 1,
    /**
     * loop属性用于<video>、<audio>标签
     * 循环播放媒体
     */
    loop: 1,
    /**
     * multiple属性用于<input>、<select>标签
     * 允许多选
     */
    multiple: 1,
    /**
     * muted属性用于<video>、<audio>标签
     * 静音播放
     */
    muted: 1,
    /**
     * nomodule属性用于<script>标签
     * 禁用模块脚本
     */
    nomodule: 1,
    /**
     * novalidate属性用于<form>标签
     * 提交表单时不验证
     */
    novalidate: 1,
    /**
     * open属性用于<details>标签
     * 默认展开
     */
    open: 1,
    /**
     * readonly属性用于<input>、<textarea>标签
     * 只读状态
     */
    readonly: 1,
    /**
     * required属性用于<input>、<select>、<textarea>标签
     * 必填字段
     */
    required: 1,
    /**
     * reversed属性用于<ol>标签
     * 反向排序
     */
    reversed: 1,
    /**
     * selected属性用于<option>标签
     * 预选中状态
     */
    selected: 1,
    /**
     * typemustmatch属性用于<object>标签
     * 类型必须匹配
     */
    typemustmatch: 1
};

exports = module.exports = boolAttrs;
