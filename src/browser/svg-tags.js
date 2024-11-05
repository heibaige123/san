/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file SVG标签表
 */


/**
 * svgTags
 *
 * @see https://www.w3.org/TR/SVG/svgdtd.html 只取常用
 * @type {Object}
 */
/**
 * 一个表示各种SVG标签及其存在的对象。
 * 该对象中的每个属性对应一个SVG标签，并且其值为1。
 */
var svgTags = {
    /**
     * 动画元素
     */
    // 表示<animate> SVG元素
    animate: 1,
    // 表示<animateMotion> SVG元素
    animateMotion: 1,
    // 表示<animateTransform> SVG元素
    animateTransform: 1,

    /**
     * 基本形状
     */
    // 表示<circle> SVG元素
    circle: 1,
    // 表示<ellipse> SVG元素
    ellipse: 1,
    // 表示<line> SVG元素
    line: 1,
    // 表示<polygon> SVG元素
    polygon: 1,
    // 表示<polyline> SVG元素
    polyline: 1,
    // 表示<rect> SVG元素
    rect: 1,

    /**
     * 容器元素
     */
    // 表示<defs> SVG元素
    defs: 1,
    // 表示<g> SVG元素
    g: 1,
    // 表示<marker> SVG元素
    marker: 1,

    /**
     * 描述性元素
     */
    // 表示<desc> SVG元素
    desc: 1,
    // 表示<metadata> SVG元素
    metadata: 1,

    /**
     * 字体元素
     */
    // 表示<font> SVG元素
    font: 1,
    // 表示<font-face> SVG元素
    'font-face': 1,

    /**
     * 渐变元素
     */
    // 表示<linearGradient> SVG元素
    linearGradient: 1,
    // 表示<radialGradient> SVG元素
    radialGradient: 1,
    // 表示<stop> SVG元素
    stop: 1,

    /**
     * 图形元素
     */
    // 表示<image> SVG元素
    image: 1,
    // 表示<path> SVG元素
    path: 1,
    // 表示<use> SVG元素
    use: 1,

    /**
     * 文本元素
     */
    // 表示<glyph> SVG元素
    glyph: 1,
    // 表示<textPath> SVG元素
    textPath: 1,
    // 表示<text> SVG元素
    text: 1,
    // 表示<tref> SVG元素
    tref: 1,
    // 表示<tspan> SVG元素
    tspan: 1,

    /**
     * 其他
     */
    // 表示<clipPath> SVG元素
    clipPath: 1,
    // 表示<cursor> SVG元素
    cursor: 1,
    // 表示<filter> SVG元素
    filter: 1,
    // 表示<foreignObject> SVG元素
    foreignObject: 1,
    // 表示<view> SVG元素
    view: 1
};


exports = module.exports = svgTags;
