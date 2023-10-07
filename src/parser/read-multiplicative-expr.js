var ExprType = require("./expr-type");
var readUnaryExpr = require("./read-unary-expr");

/**
 * 读取乘法表达式
 *
 * @param {Walker} walker 源码读取对象
 * @return {Object}
 */
function readMultiplicativeExpr(walker) {
    var expr = readUnaryExpr(walker);

    while (1) {
        walker.goUntil();

        var code = walker.source.charCodeAt(walker.index);
        switch (code) {
            case 37: // %
            case 42: // *
            case 47: // /
                walker.index++;
                expr = {
                    type: ExprType.BINARY,
                    operator: code,
                    segs: [expr, readUnaryExpr(walker)],
                };
                continue;
        }

        break;
    }

    return expr;
}

exports = module.exports = readMultiplicativeExpr;
