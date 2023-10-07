var ExprType = require("./expr-type");
var readAdditiveExpr = require("./read-additive-expr");

/**
 * 读取关系判断表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readRelationalExpr(walker) {
    var expr = readAdditiveExpr(walker);
    walker.goUntil();

    var code = walker.source.charCodeAt(walker.index);
    switch (code) {
        case 60: // <
        case 62: // >
            if (walker.nextCode() === 61) {
                code += 61;
                walker.index++;
            }

            return {
                type: ExprType.BINARY,
                operator: code,
                segs: [expr, readAdditiveExpr(walker)],
            };
    }

    return expr;
}

exports = module.exports = readRelationalExpr;
