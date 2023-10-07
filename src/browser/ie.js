// #[begin] allua
/**
 * 从userAgent中ie版本号的匹配信息
 *
 * @type {Array}
 */
var ieVersionMatch =
    typeof navigator !== "undefined" &&
    navigator.userAgent.match(/(msie|trident)(\s*|\/)([0-9]+)/i);

/**
 * ie版本号，非ie时为0
 *
 * @type {number}
 */
var ie = ieVersionMatch ? /* istanbul ignore next */ ieVersionMatch[3] - 0 : 0;
if (ie && !/msie/i.test(ieVersionMatch[1])) {
    ie += 4;
}
// #[end]

exports = module.exports = ie;
