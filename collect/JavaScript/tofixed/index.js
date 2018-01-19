/**
 * @修正 toFixed 由于精度导致的数据四舍五入不准确
 */

if (!Number.prototype._toFixed) {
    Number.prototype._toFixed = Number.prototype.toFixed;
}
Number.prototype.toFixed = function(n) {
    return (this + 1e-14)._toFixed(n);
};