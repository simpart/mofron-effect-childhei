/**
 * @file mofron-effect-childhei/index.js
 * @brief child height effect for mofron
 * @author simpart
 */
const mf = require('mofron');

/**
 * @class ChildHei
 * @brief radius style effect class
 */
mf.effect.ChildHei = class extends mf.Effect {
    
    constructor (po) {
        try {
            super();
            this.name('ChildHei');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    buff (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_buff) ? null : this.m_buff;
            }
            /* setter */
            this.m_buff = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            this.buff(tgt.height());
            let chd = tgt.child();
            let sum = '0rem';
            for (let idx in chd) {
                sum = mf.func.sizeSum(sum, chd[idx].height());
            }
            tgt.height(sum);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            tgt.child(this.buff());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.ChildHei;
