/**
 * @file 解决 IE9 在表单元素中删除字符时不触发事件的问题
 */

var ie = require('./ie');
var on = require('./on');
var trigger = require('./trigger');

// #[begin] allua
/* istanbul ignore if */
if (ie === 9) {
    on(document, 'selectionchange', function () {
        var el = document.activeElement;
        if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
            trigger(el, 'input');
        }
    });
}
// #[end]
