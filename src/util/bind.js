/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file bind函数
 */

/**
 * Function.prototype.bind 方法的兼容性封装
 *
 * @param {Function} func 要bind的函数
 * @param {Object} thisArg this指向对象
 * @param {...*} args 预设的初始参数
 * @return {Function}
 */
function bind(func, thisArg) {
    var nativeBind = Function.prototype.bind;
    var slice = Array.prototype.slice;
    
    if (nativeBind && func.bind === nativeBind) {
    
        return nativeBind.apply(func, slice.call(arguments, 1));
    
    }

    
    var args = slice.call(arguments, 2);
    
    return function () {
        return func.apply(thisArg, args.concat(slice.call(arguments)));
    };
    
}

exports = module.exports = bind;
