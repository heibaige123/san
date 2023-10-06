

/**
 * 获取 ANode props 数组中相应 name 的项
 *
 * @param {Object} aNode ANode对象
 * @param {string} name name属性匹配串
 * @return {Object}
 */
function getANodeProp(aNode, name) {
    var index = aNode._pi[name];
    if (index != null) {
        return aNode.props[index];
    }
}

exports = module.exports = getANodeProp;
