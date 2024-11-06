/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file 表达式类型
 */

/**
 * 表达式类型
 *
 * @const
 * @type {Object}
 */
var ExprType = {
    /** 表示字符串类型的表达式 */
    STRING: 1,

    /** 表示数字类型的表达式 */
    NUMBER: 2,

    /** 表示布尔类型的表达式 */
    BOOL: 3,

    /** 表示访问器类型的表达式，用于访问对象的属性 */
    ACCESSOR: 4,

    /** 表示插值类型的表达式，通常用于模板字符串中 */
    INTERP: 5,

    /** 表示函数调用类型的表达式 */
    CALL: 6,

    /** 表示文本类型的表达式 */
    TEXT: 7,

    /** 表示二元运算类型的表达式，例如加法、减法等 */
    BINARY: 8,

    /** 表示一元运算类型的表达式，例如取反、取负等 */
    UNARY: 9,

    /** 表示三元运算类型的表达式，例如条件运算符（condition ? expr1 : expr2） */
    TERTIARY: 10,

    /** 表示对象类型的表达式 */
    OBJECT: 11,

    /** 表示数组类型的表达式 */
    ARRAY: 12,

    /** 表示空值类型的表达式 */
    NULL: 13
};

exports = module.exports = ExprType;
