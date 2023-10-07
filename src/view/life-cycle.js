function lifeCycleOwnIs(name) {
    return this[name];
}

/* eslint-disable fecs-valid-var-jsdoc */
/**
 * 节点生命周期信息
 *
 * @inner
 * @type {Object}
 */
var LifeCycle = {
    start: {
        is: lifeCycleOwnIs,
    },

    compiled: {
        is: lifeCycleOwnIs,
        compiled: true,
    },

    inited: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
    },

    created: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true,
    },

    attached: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true,
        attached: true,
    },

    leaving: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true,
        attached: true,
        leaving: true,
    },

    detached: {
        is: lifeCycleOwnIs,
        compiled: true,
        inited: true,
        created: true,
        detached: true,
    },

    disposed: {
        is: lifeCycleOwnIs,
        disposed: true,
    },
};
/* eslint-enable fecs-valid-var-jsdoc */

exports = module.exports = LifeCycle;
