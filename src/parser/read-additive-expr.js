var ExprType = require("./expr-type");
var readMultiplicativeExpr = require("./read-multiplicative-expr");

/**
 * 读取加法表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readAdditiveExpr(walker) {
    var expr = readMultiplicativeExpr(walker);

    while (1) {
        walker.goUntil();
        var code = walker.source.charCodeAt(walker.index);

        switch (code) {
            case 43: // +
            case 45: // -
                walker.index++;
                expr = {
                    type: ExprType.BINARY,
                    operator: code,
                    segs: [expr, readMultiplicativeExpr(walker)],
                };
                continue;
        }

        break;
    }

    return expr;
}

exports = module.exports = readAdditiveExpr;
