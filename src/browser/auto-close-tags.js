/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file 自闭合标签表
 */

/**
 * 自闭合标签列表
 *
 * @type {Object}
 */
var autoCloseTags = {
    area: 1, // <area> 标签
    base: 1, // <base> 标签
    br: 1, // <br> 标签
    col: 1, // <col> 标签
    embed: 1, // <embed> 标签
    hr: 1, // <hr> 标签
    img: 1, // <img> 标签
    input: 1, // <input> 标签
    link: 1, // <link> 标签
    meta: 1, // <meta> 标签
    param: 1, // <param> 标签
    source: 1, // <source> 标签
    track: 1, // <track> 标签
    wbr: 1 // <wbr> 标签
};

exports = module.exports = autoCloseTags;
